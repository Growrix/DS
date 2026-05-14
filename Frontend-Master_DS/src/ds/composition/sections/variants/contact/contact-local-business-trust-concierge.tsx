import { Button } from "@/ds/primitives/Button";
import { Badge } from "@/ds/components/Badge";
import { Card } from "@/ds/components/Card";
import { Field } from "@/ds/components/Field";
import { SectionPattern } from "@/ds/composition/patterns/SectionPattern";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";
import { Grid } from "@/ds/primitives/Grid";
import { Input } from "@/ds/primitives/Input";
import { Select } from "@/ds/primitives/Select";
import { Stack } from "@/ds/primitives/Stack";
import { Text } from "@/ds/primitives/Text";
import { Textarea } from "@/ds/primitives/Textarea";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";

type ContactModel = Extract<PublicSectionModel, { kind: "contact" }>;
type ContactField = NonNullable<ContactModel["form"]>["fields"][number];

export const CONTACT_LOCAL_BUSINESS_TRUST_CONCIERGE_META: SectionVariantMeta = {
  id: "contact-local-business-trust-concierge",
  kind: "contact",
  archetype: "local-business-trust",
  label: "Contact - Local Business Trust Concierge",
  description:
    "Concierge-style booking surface with trust-first channels, response guidance, and a darker form panel.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in", "rise-soft"],
  effects: {},
  density: "comfortable",
  complexity: "rich",
};

function renderContactField(field: ContactField) {
  const fieldId = `contact-${field.id}`;

  if (field.type === "textarea") {
    return (
      <Field key={field.id} id={fieldId} label={field.label} required={field.required}>
        <Textarea placeholder={field.placeholder} rows={5} autoResize />
      </Field>
    );
  }

  if (field.type === "select") {
    return (
      <Field key={field.id} id={fieldId} label={field.label} required={field.required}>
        <Select defaultValue="">
          <option value="" disabled>
            {field.placeholder ?? field.label}
          </option>
          {field.options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </Field>
    );
  }

  return (
    <Field key={field.id} id={fieldId} label={field.label} required={field.required}>
      <Input type={field.type} placeholder={field.placeholder} />
    </Field>
  );
}

export function ContactLocalBusinessTrustConcierge({
  header,
  channels,
  form,
  map,
}: ContactModel) {
  const sectionHeader = header
    ? {
        kicker: header.kicker,
        title: header.title,
        lede: header.lede,
      }
    : undefined;

  const textareaFields = form?.fields.filter((field) => field.type === "textarea") ?? [];
  const primaryFields = form?.fields.filter((field) => field.type !== "textarea") ?? [];

  return (
    <div
      className="sv-section-root"
      data-variant={CONTACT_LOCAL_BUSINESS_TRUST_CONCIERGE_META.id}
      data-archetype={CONTACT_LOCAL_BUSINESS_TRUST_CONCIERGE_META.archetype}
    >
      <SectionPattern container="wide" header={sectionHeader}>
        <Grid columns={2} gap="loose" className="motion-fade-in">
          <Card className="ui-stack ui-stack--loose shadow-sm bg-surface-elevated">
            <Stack gap="compact">
              <Badge tone="warning" variant="tag" size="sm">
                Dispatch and estimates
              </Badge>
              <h3 className="text-heading-3 text-balance">
                Share the urgency, property type, and access notes so the right crew shows up first time.
              </h3>
              <Text tone="muted">
                We use this information to confirm coverage, line up materials, and protect the arrival window you were promised.
              </Text>
            </Stack>

            <Stack gap="compact">
              {channels?.map((channel) => (
                <Card key={channel.id} className="ui-stack ui-stack--tight bg-surface">
                  <span className="text-overline">{channel.label}</span>
                  {channel.href ? (
                    <a className="ui-navlink ui-focus-ring text-body-large" href={channel.href}>
                      {channel.value}
                    </a>
                  ) : (
                    <Text>{channel.value}</Text>
                  )}
                </Card>
              ))}
            </Stack>

            {map?.alt ? (
              <Card className="ui-stack ui-stack--tight bg-surface">
                <span className="text-overline">Coverage</span>
                <Text tone="muted">{map.alt}</Text>
              </Card>
            ) : null}
          </Card>

          <Card className="ui-stack ui-stack--loose ui-theme-scope shadow-lg" data-theme="dark" data-visual="sleek">
            <Stack gap="compact">
              <Badge tone="warning" variant="tag" size="sm">
                Request a site visit
              </Badge>
              <h3 className="text-heading-3">We usually confirm next steps within one business hour.</h3>
              <Text tone="muted">
                Planned works get a clean scope and estimate path. Urgent issues are triaged for the fastest realistic dispatch window.
              </Text>
            </Stack>

            {form ? (
              <form className="ui-stack" action="#" method="post">
                <Grid columns={2} gap="compact">
                  {primaryFields.map(renderContactField)}
                </Grid>
                {textareaFields.map(renderContactField)}
                {form.consentNote ? (
                  <Text variant="body-small" tone="muted">
                    {form.consentNote}
                  </Text>
                ) : null}
                <Button type="submit" size="lg">
                  {form.submitLabel}
                </Button>
              </form>
            ) : null}
          </Card>
        </Grid>
      </SectionPattern>
    </div>
  );
}