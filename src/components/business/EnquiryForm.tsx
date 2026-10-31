import { useState, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { API_BASE } from "../../utils/apiBase";
import { ArrowRight } from "lucide-react";

/**
 * The business enquiry form.
 *
 * IT SENDS NOW. It posts to `/api/business/enquiry` on the consumer backend,
 * which validates everything again, rate-limits by IP and by address, and
 * emails the enquiry to the sales inbox.
 *
 * THE EMAIL IS THE RECORD — there is no table and no CRM row behind this, by
 * decision. Two things follow for this file:
 *
 *   - the consent wording below is sent to the server and written into the
 *     email, so what was agreed to is kept rather than merely validated here;
 *   - a failed send must say so. The previous version of this component said
 *     the form was not connected; the failure mode it was avoiding is the
 *     same one here, and the rule has not changed: never show a success
 *     message for something that did not send.
 *
 * SERVICE-SPECIFIC FIELDS are Ahsan's, restored. All of them are optional in
 * his schema and they stay optional — a buyer who knows their waste category
 * can say so up front, and one who does not is not stopped at the door. The
 * server prints only the fields belonging to the chosen service, so changing
 * the picker mid-fill cannot smuggle a rewards answer into a waste enquiry.
 */

type Service = "general" | "waste-management" | "rewards" | "impact";

/** A field, described rather than drawn, so the layout can count them. */
type Spec =
  | {
      kind: "text";
      key: keyof Values;
      label: string;
      type?: string;
      required?: boolean;
      min?: number;
      max?: number;
    }
  | {
      kind: "select";
      key: keyof Values;
      label: string;
      options: readonly (readonly [string, string])[];
    }
  | {
      kind: "area";
      key: keyof Values;
      label: string;
      placeholder?: string;
    };

/** His four, exactly — the server rejects anything else. */
const SOURCE_PAGES = [
  "/business",
  "/business/waste-management",
  "/business/rewards",
  "/business/impact",
] as const;

/* API_BASE is shared with the contact form — see src/utils/appStore.ts. */

/*
 * The wording people agree to.
 *
 * NOT SENT TO THE SERVER, deliberately. The route keeps its own copy and
 * writes that into the email, because a client-supplied consent string is
 * something a caller can claim rather than something we recorded — anyone
 * can POST whatever wording they like.
 *
 * The two copies must therefore be kept in step: this one is what a person
 * reads, and the route's is what gets filed. Changing one without the other
 * means the record says something the person never saw. The route's copy is
 * in app/api/business/enquiry/route.ts, in the Consent block of the email.
 */
const CONSENT_TEXT =
  "I agree that Mint Rewards may contact me regarding this enquiry. We will use these details only to respond.";

type Values = {
  name: string;
  company: string;
  workEmail: string;
  phone: string;
  city: string;
  message: string;
  privacyConsent: boolean;
  /** Honeypot. Named innocuously, hidden off-screen, never shown to a human. */
  website: string;
  // Waste
  industry: string;
  wasteCategory: string;
  hazardousStatus: string;
  monthlyQuantity: string;
  collectionLocation: string;
  wasteService: string;
  // Rewards
  businessCategory: string;
  outletCount: string;
  rewardOffer: string;
  geographicCoverage: string;
  // Impact
  impactInterest: string;
  targetLocation: string;
  programmeObjectives: string;
  programmeScale: string;
};

const EMPTY: Values = {
  name: "",
  company: "",
  workEmail: "",
  phone: "",
  city: "",
  message: "",
  privacyConsent: false,
  website: "",
  industry: "",
  wasteCategory: "",
  hazardousStatus: "",
  monthlyQuantity: "",
  collectionLocation: "",
  wasteService: "",
  businessCategory: "",
  outletCount: "",
  rewardOffer: "",
  geographicCoverage: "",
  impactInterest: "",
  targetLocation: "",
  programmeObjectives: "",
  programmeScale: "",
};

const HAZARDOUS_OPTIONS = [
  ["", "Not sure yet"],
  ["hazardous", "Hazardous"],
  ["non-hazardous", "Non hazardous"],
  ["both", "Both"],
  ["unsure", "Unsure"],
] as const;

const WASTE_SERVICE_OPTIONS = [
  ["", "Not sure yet"],
  ["hazardous-waste-management", "Hazardous waste management"],
  ["non-hazardous-waste-management", "Non hazardous waste management"],
  ["industrial-recycling", "Industrial recycling & recovery"],
  ["material-sale-recovery", "Material recovery & purchasing"],
  ["integrated-waste-contract", "Integrated waste management contract"],
  ["other", "Something else"],
] as const;

export default function EnquiryForm({
  service = "general",
  showServicePicker = false,
  title = "Talk to our team",
}: {
  service?: Service;
  showServicePicker?: boolean;
  title?: string;
}) {
  const { pathname } = useLocation();
  const [values, setValues] = useState<Values>({ ...EMPTY });
  const [chosenService, setChosenService] = useState<Service>(service);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (key: keyof Values, value: string | boolean) =>
    setValues((v) => ({ ...v, [key]: value }));

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;

    /* His rules, unchanged. The server checks all of this again — these are
       for the person filling it in, those are the ones that count. */
    const next: Record<string, string> = {};
    if (values.name.trim().length < 2)
      next.name = "Enter your name (at least 2 characters).";
    if (values.company.trim().length < 2)
      next.company = "Enter your company name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.workEmail))
      next.workEmail = "Enter a valid work email address.";
    if (values.message.trim().length < 10)
      next.message =
        "Please add a little more detail (at least 10 characters).";
    if (!values.privacyConsent)
      next.privacyConsent =
        "Please confirm you agree to be contacted about this enquiry.";

    setErrors(next);
    setNotice("");
    if (Object.keys(next).length) {
      document.getElementById(`field-${Object.keys(next)[0]}`)?.focus();
      return;
    }

    const sourcePage = (SOURCE_PAGES as readonly string[]).includes(pathname)
      ? pathname
      : undefined;

    setSending(true);
    try {
      const response = await fetch(`${API_BASE}/api/business/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          company: values.company.trim(),
          workEmail: values.workEmail.trim(),
          phone: values.phone.trim(),
          city: values.city.trim(),
          message: values.message.trim(),
          privacyConsent: values.privacyConsent,
          service: chosenService,
          sourcePage,
          website: values.website,
          industry: values.industry.trim(),
          wasteCategory: values.wasteCategory.trim(),
          hazardousStatus: values.hazardousStatus || undefined,
          monthlyQuantity: values.monthlyQuantity.trim(),
          collectionLocation: values.collectionLocation.trim(),
          wasteService: values.wasteService || undefined,
          businessCategory: values.businessCategory.trim(),
          outletCount: values.outletCount ? Number(values.outletCount) : undefined,
          rewardOffer: values.rewardOffer.trim(),
          geographicCoverage: values.geographicCoverage.trim(),
          impactInterest: values.impactInterest.trim(),
          targetLocation: values.targetLocation.trim(),
          programmeObjectives: values.programmeObjectives.trim(),
          programmeScale: values.programmeScale.trim(),
        }),
      });

      if (response.ok) {
        setSent(true);
        return;
      }

      /*
       * 429 is the one worth naming. A generic "something went wrong" on a
       * rate limit reads as a broken form and gets retried immediately,
       * which is exactly what the limit is there to stop.
       */
      if (response.status === 429) {
        setNotice(
          "We have had several enquiries from here recently. Please wait a little while and try again.",
        );
        return;
      }

      const body = await response.json().catch(() => null);
      setNotice(
        body?.error ||
          "We could not send your enquiry. Please try again, or email us directly.",
      );
    } catch {
      // Network failure, a blocked request, the API being down. Say so —
      // never a success message for something that did not send.
      setNotice(
        "We could not reach our servers. Please check your connection and try again.",
      );
    } finally {
      setSending(false);
    }
  }

  const field = (
    key: keyof Values,
    label: string,
    opts: {
      required?: boolean;
      type?: string;
      full?: boolean;
      min?: number;
      max?: number;
    } = {},
  ) => (
    <div className={`field${opts.full ? " full" : ""}`} key={key}>
      <label htmlFor={`field-${key}`}>
        {label}
        {opts.required && " *"}
      </label>
      <input
        id={`field-${key}`}
        type={opts.type ?? "text"}
        value={String(values[key])}
        min={opts.min}
        max={opts.max}
        onChange={(e) => update(key, e.target.value)}
        aria-invalid={!!errors[key]}
      />
      <span className="field-error">{errors[key]}</span>
    </div>
  );

  const select = (
    key: keyof Values,
    label: string,
    options: readonly (readonly [string, string])[],
    full = false,
  ) => (
    <div className={`field${full ? " full" : ""}`} key={key}>
      <label htmlFor={`field-${key}`}>{label}</label>
      <select
        id={`field-${key}`}
        value={String(values[key])}
        onChange={(e) => update(key, e.target.value)}
      >
        {options.map(([value, text]) => (
          <option value={value} key={value || "none"}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );

  const area = (key: keyof Values, label: string, placeholder?: string) => (
    <div className="field full" key={key}>
      <label htmlFor={`field-${key}`}>{label}</label>
      <textarea
        id={`field-${key}`}
        value={String(values[key])}
        placeholder={placeholder}
        onChange={(e) => update(key, e.target.value)}
      />
    </div>
  );

  /*
   * Ahsan's per-service questions, in his order. All optional, as in his
   * schema — declared rather than written out as JSX so the layout below can
   * count them.
   */
  const EXTRAS: Record<Service, Spec[]> = {
    "waste-management": [
      { kind: "text", key: "industry", label: "Industry" },
      { kind: "text", key: "wasteCategory", label: "Waste category" },
      {
        kind: "select",
        key: "hazardousStatus",
        label: "Hazardous status",
        options: HAZARDOUS_OPTIONS,
      },
      {
        kind: "text",
        key: "monthlyQuantity",
        label: "Approximate monthly quantity",
      },
      {
        kind: "text",
        key: "collectionLocation",
        label: "Collection location",
      },
      {
        kind: "select",
        key: "wasteService",
        label: "Service of interest",
        options: WASTE_SERVICE_OPTIONS,
      },
    ],
    rewards: [
      { kind: "text", key: "businessCategory", label: "Business category" },
      {
        kind: "text",
        key: "outletCount",
        label: "Number of outlets",
        type: "number",
        min: 1,
        max: 100000,
      },
      {
        kind: "text",
        key: "geographicCoverage",
        label: "Geographic coverage",
      },
      {
        kind: "area",
        key: "rewardOffer",
        label: "Reward or offer you have in mind",
        placeholder:
          "For example a discount, a voucher or an exclusive benefit.",
      },
    ],
    impact: [
      { kind: "text", key: "impactInterest", label: "Area of interest" },
      { kind: "text", key: "targetLocation", label: "Target location" },
      { kind: "text", key: "programmeScale", label: "Programme scale" },
      {
        kind: "area",
        key: "programmeObjectives",
        label: "Programme objectives",
        placeholder: "What would this programme need to achieve?",
      },
    ],
    general: [],
  };

  const SHARED: Spec[] = [
    { kind: "text", key: "name", label: "Your name", required: true },
    { kind: "text", key: "company", label: "Company", required: true },
    {
      kind: "text",
      key: "workEmail",
      label: "Work email",
      type: "email",
      required: true,
    },
    { kind: "text", key: "phone", label: "Phone", type: "tel" },
    { kind: "text", key: "city", label: "City" },
  ];

  /*
   * THE ORPHAN RULE, and why this is computed rather than written out.
   *
   * The grid is two columns and a full-width field starts a new row, so a
   * full-width field landing after an ODD number of half-width ones leaves
   * a visible hole beside the last of them. That is what put empty space
   * next to "Approximate monthly quantity": collection location was
   * full-width and arrived tenth.
   *
   * Hand-balancing it per service is the kind of thing that is correct once
   * and wrong after the next field is added — and it differs per service,
   * since each contributes a different number. So the last half-width field
   * is promoted to full whenever the count is odd, which closes the hole
   * wherever it would fall and keeps closing it.
   */
  const halves = [
    ...SHARED,
    ...EXTRAS[chosenService].filter((f) => f.kind !== "area"),
  ];
  const areas = EXTRAS[chosenService].filter((f) => f.kind === "area");
  const lastIsOrphan = halves.length % 2 === 1;

  const render = (spec: Spec, full = false) => {
    if (spec.kind === "area")
      return area(spec.key, spec.label, spec.placeholder);
    if (spec.kind === "select")
      return select(spec.key, spec.label, spec.options, full);
    return field(spec.key, spec.label, {
      required: spec.required,
      type: spec.type,
      min: spec.min,
      max: spec.max,
      full,
    });
  };

  return (
    <section id="enquiry" className="form-section">
      <div className="container form-grid">
        <div className="form-intro">
          {/* A div, not a p — see the note on Eyebrow. */}
          <div className="eyebrow">Start a conversation</div>
          <h2>Let's find the right fit for your business.</h2>
          <p>
            Tell us what you are working on. Our team will follow up to
            understand your requirements and next steps.
          </p>
          <div className="form-contact">
            No commitment required.
            <br />
            Your details are used only to respond to this enquiry.
          </div>
        </div>

        {sent ? (
          /*
           * The form is replaced rather than left on screen with a banner
           * above it. Leaving a filled form beside "thank you" invites a
           * second submit, which the per-address limit would then refuse —
           * so the person is told they succeeded and then told off.
           */
          <div className="enquiry-form" role="status">
            <div className="form-title">
              <h3>Thank you — we have your enquiry.</h3>
            </div>
            <div className="form-success">
              Our team will be in touch at{" "}
              <strong>{values.workEmail.trim()}</strong>. We usually reply
              within one working day.
            </div>
            <p className="privacy-copy">
              Nothing further is needed from you. If it is urgent, reply to the
              confirmation thread once we have written to you.
            </p>
          </div>
        ) : (
          <form className="enquiry-form" onSubmit={submit} noValidate>
            <div className="form-title">
              <h3>{title}</h3>
              <span>Fields marked * are required</span>
            </div>

            {notice && (
              <div className="form-error" role="alert">
                {notice}
              </div>
            )}

            <div className="form-fields">
              {showServicePicker && (
                <div className="field full">
                  <label htmlFor="service-interest">Service of interest</label>
                  <select
                    id="service-interest"
                    value={chosenService}
                    onChange={(e) =>
                      setChosenService(e.target.value as Service)
                    }
                  >
                    <option value="general">Not sure yet</option>
                    <option value="waste-management">
                      Industrial waste management — RecovLoop
                    </option>
                    <option value="rewards">Rewards partnership</option>
                    <option value="impact">Impact solutions</option>
                  </select>
                </div>
              )}

              {halves.map((spec, i) =>
                render(spec, lastIsOrphan && i === halves.length - 1),
              )}
              {areas.map((spec) => render(spec))}

              <div className="field full">
                <label htmlFor="field-message">How can we help? *</label>
                <textarea
                  id="field-message"
                  value={values.message}
                  onChange={(e) => update("message", e.target.value)}
                  aria-invalid={!!errors.message}
                  placeholder="Share a little about your needs, goals or timeline."
                />
                <span className="field-error">{errors.message}</span>
              </div>

              {/* Honeypot: off-screen and hidden from assistive technology, so
                  only something filling every field will touch it. */}
              <div
                className="field"
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px" }}
              >
                <label htmlFor="field-website">Website</label>
                <input
                  id="field-website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.website}
                  onChange={(e) => update("website", e.target.value)}
                />
              </div>
            </div>

            <label className="consent">
              <input
                type="checkbox"
                checked={values.privacyConsent}
                onChange={(e) => update("privacyConsent", e.target.checked)}
              />{" "}
              <span>{CONSENT_TEXT}</span>
            </label>
            {errors.privacyConsent && (
              <div className="field-error" role="alert">
                {errors.privacyConsent}
              </div>
            )}

            <button className="submit-btn" type="submit" disabled={sending}>
              {sending ? "Sending…" : "Send enquiry"}
              {!sending && <ArrowRight size={15} />}
            </button>
            <p className="privacy-copy">
              Your information is handled with care and is not displayed
              publicly.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
