import { useState, type ChangeEvent } from "react";
import { z } from "zod";
import { Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { services, timeSlots } from "@/data/site";
import { submitAppointmentRequest } from "@/lib/appointments";
import { cn } from "@/lib/utils";

const schema = z.object({
  firstName: z.string().trim().min(1, "Prénom requis").max(80),
  lastName: z.string().trim().min(1, "Nom requis").max(80),
  phone: z.string().trim().min(6, "Téléphone requis").max(30),
  email: z.string().trim().email("Email invalide").max(255),
  service: z.string().min(1, "Sélectionnez une prestation"),
  date1: z.string().min(1, "Date souhaitée requise"),
  slot1: z.string().min(1, "Plage horaire requise"),
  date2: z.string().optional(),
  slot2: z.string().optional(),
  message: z.string().trim().max(1000).optional(),
  consent: z.literal(true, { message: "Merci de confirmer vos informations" }),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const fieldClass =
  "h-12 rounded-none border-0 border-b border-input bg-transparent px-0 text-base shadow-none focus-visible:border-champagne focus-visible:ring-0";

export function AppointmentForm({ defaultService = "" }: { defaultService?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [consent, setConsent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [photoName, setPhotoName] = useState<string | null>(null);

  const onPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    setPhotoName(e.target.files?.[0]?.name ?? null);
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const raw = {
      firstName: String(form.get("firstName") ?? ""),
      lastName: String(form.get("lastName") ?? ""),
      phone: String(form.get("phone") ?? ""),
      email: String(form.get("email") ?? ""),
      service: String(form.get("service") ?? ""),
      date1: String(form.get("date1") ?? ""),
      slot1: String(form.get("slot1") ?? ""),
      date2: String(form.get("date2") ?? ""),
      slot2: String(form.get("slot2") ?? ""),
      message: String(form.get("message") ?? ""),
      consent,
    };

    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setSending(true);
    try {
      await submitAppointmentRequest({ ...parsed.data, photoName });
      setSent(true);
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="border border-champagne/70 bg-card px-6 py-16 text-center md:px-16">
        <span className="mx-auto flex size-12 items-center justify-center rounded-full border border-champagne">
          <Check className="size-5" aria-hidden="true" />
        </span>
        <h2 className="mt-8 text-3xl md:text-4xl">Votre demande est envoyée</h2>
        <div className="rule-gold mx-auto mt-6" />
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
          Merci pour votre confiance. Votre demande de rendez-vous a bien été transmise.
          Vous serez recontactée très prochainement afin de confirmer la date, l'horaire
          et la prestation souhaitée.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-10">
      <fieldset className="space-y-6">
        <legend className="eyebrow">Vos coordonnées</legend>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Prénom" error={errors.firstName}>
            <Input name="firstName" autoComplete="given-name" className={fieldClass} />
          </Field>
          <Field label="Nom" error={errors.lastName}>
            <Input name="lastName" autoComplete="family-name" className={fieldClass} />
          </Field>
          <Field label="Téléphone" error={errors.phone}>
            <Input name="phone" type="tel" autoComplete="tel" className={fieldClass} />
          </Field>
          <Field label="Email" error={errors.email}>
            <Input name="email" type="email" autoComplete="email" className={fieldClass} />
          </Field>
        </div>
      </fieldset>

      <fieldset className="space-y-6">
        <legend className="eyebrow">Votre rendez-vous</legend>
        <Field label="Prestation souhaitée" error={errors.service}>
          <select
            name="service"
            defaultValue={defaultService}
            className={cn(fieldClass, "w-full appearance-none border-b outline-none")}
          >
            <option value="">Sélectionner une prestation</option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </Field>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Date souhaitée" error={errors.date1}>
            <Input name="date1" type="date" className={fieldClass} />
          </Field>
          <Field label="Plage horaire souhaitée" error={errors.slot1}>
            <select name="slot1" className={cn(fieldClass, "w-full appearance-none border-b outline-none")}>
              <option value="">Sélectionner</option>
              {timeSlots.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <p className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
          Deuxième possibilité (optionnel)
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Autre date" error={errors.date2}>
            <Input name="date2" type="date" className={fieldClass} />
          </Field>
          <Field label="Autre plage horaire" error={errors.slot2}>
            <select name="slot2" className={cn(fieldClass, "w-full appearance-none border-b outline-none")}>
              <option value="">Sélectionner</option>
              {timeSlots.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </Field>
        </div>
      </fieldset>

      <fieldset className="space-y-6">
        <legend className="eyebrow">Informations complémentaires</legend>
        <Field label="Message (historique de couleur, souhaits, longueur…)" error={errors.message}>
          <Textarea
            name="message"
            rows={5}
            maxLength={1000}
            className="resize-none rounded-none border-0 border-b border-input bg-transparent px-0 shadow-none focus-visible:border-champagne focus-visible:ring-0"
          />
        </Field>

        <div>
          <Label className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
            Photo de vos cheveux actuels (optionnel)
          </Label>
          <input
            type="file"
            accept="image/*"
            onChange={onPhoto}
            className="mt-3 block w-full text-sm text-muted-foreground file:mr-4 file:border file:border-foreground/50 file:bg-transparent file:px-4 file:py-2 file:text-[0.65rem] file:tracking-[0.2em] file:uppercase"
          />
          {photoName ? (
            <p className="mt-2 text-xs text-muted-foreground">Sélectionnée : {photoName}</p>
          ) : null}
        </div>
      </fieldset>

      <div className="flex items-start gap-3">
        <Checkbox
          id="consent"
          checked={consent}
          onCheckedChange={(v) => setConsent(v === true)}
          className="mt-0.5 rounded-none"
        />
        <Label htmlFor="consent" className="text-sm leading-relaxed font-light text-muted-foreground">
          Je confirme que les informations communiquées sont correctes et j'accepte d'être
          recontactée pour la confirmation de mon rendez-vous.
        </Label>
      </div>
      {errors.consent ? <p className="text-xs text-destructive">{errors.consent}</p> : null}

      <button
        type="submit"
        disabled={sending}
        className="w-full bg-foreground py-4 text-[0.7rem] tracking-[0.24em] text-primary-foreground uppercase transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto sm:px-14"
      >
        {sending ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Il s'agit d'une demande de rendez-vous : elle sera confirmée personnellement
        avant d'être définitive.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
        {label}
      </Label>
      <div className="mt-2">{children}</div>
      {error ? <p className="mt-2 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
