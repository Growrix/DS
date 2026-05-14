import { SiteFooter } from "@/ds/components/PublicBlocks";
import { Button } from "@/ds/primitives/Button";
import { Input } from "@/ds/primitives/Input";
import { Section } from "@/ds/components/Section";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";
import { Grid } from "@/ds/primitives/Grid";
import { Stack } from "@/ds/primitives/Stack";
import { Text } from "@/ds/primitives/Text";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";

type FooterContentModel = Extract<PublicSectionModel, { kind: "footer-content" }>;

export const FOOTER_CONTENT_MODERN_SAAS_COLUMNS_META: SectionVariantMeta = {
  id: "footer-content-modern-saas-columns",
  kind: "footer-content",
  archetype: "modern-saas",
  label: "Footer Content - Modern SaaS Columns",
  description:
    "Token-driven footer with brand block, support links, optional newsletter signup, and legal attribution.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
  isDefault: true,
};

export function FooterContentModernSaasColumns(props: FooterContentModel) {
  return (
    <div
      className="sv-section-root sv-footer-content-modern-saas-columns"
      data-variant={FOOTER_CONTENT_MODERN_SAAS_COLUMNS_META.id}
      data-archetype={FOOTER_CONTENT_MODERN_SAAS_COLUMNS_META.archetype}
    >
      <Section tone="surface" size="sm" container="wide" className="motion-fade-in">
        <Stack gap="loose">
          <Grid columns={3}>
            <Stack gap="tight">
              {props.brand?.name ? <h2 className="text-heading-4">{props.brand.name}</h2> : null}
              {props.brand?.tagline ? <Text tone="muted">{props.brand.tagline}</Text> : null}
              {props.socials?.length ? (
                <div className="ui-row">
                  {props.socials.map((social) => (
                    <a key={social.id} className="ui-navlink ui-focus-ring" href={social.href}>
                      {social.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </Stack>

            {props.newsletter ? (
              <Stack gap="compact">
                <h3 className="text-heading-5">{props.newsletter.title}</h3>
                {props.newsletter.description ? (
                  <Text tone="muted">{props.newsletter.description}</Text>
                ) : null}
                <div className="ui-row">
                  <Input type="email" placeholder={props.newsletter.placeholder} />
                  <Button type="button">{props.newsletter.submitLabel}</Button>
                </div>
                {props.newsletter.consentNote ? (
                  <Text variant="body-small" tone="muted">
                    {props.newsletter.consentNote}
                  </Text>
                ) : null}
              </Stack>
            ) : (
              <div />
            )}

            <Stack gap="tight">
              {props.legalLinks?.length ? (
                <Stack gap="tight">
                  {props.legalLinks.map((link) => (
                    <a key={link.id} className="ui-navlink ui-focus-ring" href={link.href}>
                      {link.label}
                    </a>
                  ))}
                </Stack>
              ) : null}

              {props.appLinks?.appStore ? (
                <a className="ui-navlink ui-focus-ring" href={props.appLinks.appStore.href}>
                  {props.appLinks.appStore.alt}
                </a>
              ) : null}
              {props.appLinks?.playStore ? (
                <a className="ui-navlink ui-focus-ring" href={props.appLinks.playStore.href}>
                  {props.appLinks.playStore.alt}
                </a>
              ) : null}
            </Stack>
          </Grid>

          {props.columns?.length ? <SiteFooter columns={props.columns} /> : null}

          {props.attribution ? (
            <Text variant="body-small" tone="muted">
              {props.attribution.prefix ? `${props.attribution.prefix} ` : ""}
              <a
                className="ui-navlink ui-focus-ring"
                aria-label={props.attribution.ariaLabel}
                href={props.attribution.url}
              >
                {props.attribution.linkText}
              </a>
              {props.attribution.suffix ? ` ${props.attribution.suffix}` : ""}
            </Text>
          ) : null}
        </Stack>
      </Section>
    </div>
  );
}