import { Button } from "@/ds/primitives/Button";
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

export const CONTACT_LOCAL_BUSINESS_TRUST_SPLIT_META: SectionVariantMeta = {
  id: "contact-local-business-trust-split",
  kind: "contact",
  archetype: "local-business-trust",
  label: "Contact - Local Business Trust Split",
  description:
    "Two-column contact surface pairing trust-first contact channels with a structured inquiry form.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
  isDefault: true,
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

export function ContactLocalBusinessTrustSplit(props: ContactModel) {
  const sectionHeader = props.header?.title
    ? {
        kicker: props.header.kicker,
        title: props.header.title,
        lede: props.header.lede,
      }
    : undefined;

  return (
    <div
      className="sv-section-root sv-contact-local-business-trust-split"
      data-variant={CONTACT_LOCAL_BUSINESS_TRUST_SPLIT_META.id}
      data-archetype={CONTACT_LOCAL_BUSINESS_TRUST_SPLIT_META.archetype}
    >
      <SectionPattern container="wide" header={sectionHeader}>
        <Grid columns={2} className="motion-fade-in">
          <Card>
            <Stack gap="compact">
              <h3 className="text-heading-4">Contact channels</h3>
              {props.channels?.length ? (
                props.channels.map((channel) => (
                  <Stack key={channel.id} gap="tight">
                    <Text variant="label">{channel.label}</Text>
                    {channel.href ? (
                      <a className="ui-navlink ui-focus-ring" href={channel.href}>
                        {channel.value}
                      </a>
                    ) : (
                      <Text tone="muted">{channel.value}</Text>
                    )}
                  </Stack>
                ))
              ) : (
                <Text tone="muted">Add channels to render direct contact details here.</Text>
              )}

              {props.map ? (
                <Stack gap="tight">
                  <Text variant="label">Location</Text>
                  {props.map.embedUrl ? (
                    <a className="ui-navlink ui-focus-ring" href={props.map.embedUrl}>
                      {props.map.alt ?? "Open map"}
                    </a>
                  ) : props.map.alt ? (
                    <Text tone="muted">{props.map.alt}</Text>
                  ) : null}
                </Stack>
              ) : null}
            </Stack>
          </Card>

          <Card>
            <form className="ui-stack">
              {props.form?.fields?.map(renderContactField)}
              {props.form?.consentNote ? (
                <Text variant="body-small" tone="muted">
                  {props.form.consentNote}
                </Text>
              ) : null}
              {props.form ? <Button type="submit">{props.form.submitLabel}</Button> : null}
            </form>
          </Card>
        </Grid>
      </SectionPattern>
    </div>
  );
}