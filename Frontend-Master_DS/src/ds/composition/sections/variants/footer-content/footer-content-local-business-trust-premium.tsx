import { Button } from "@/ds/primitives/Button";
import { Badge } from "@/ds/components/Badge";
import { Card } from "@/ds/components/Card";
import { Section } from "@/ds/components/Section";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";
import { Grid } from "@/ds/primitives/Grid";
import { Input } from "@/ds/primitives/Input";
import { Stack } from "@/ds/primitives/Stack";
import { Text } from "@/ds/primitives/Text";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";

type FooterContentModel = Extract<PublicSectionModel, { kind: "footer-content" }>;

export const FOOTER_CONTENT_LOCAL_BUSINESS_TRUST_PREMIUM_META: SectionVariantMeta = {
  id: "footer-content-local-business-trust-premium",
  kind: "footer-content",
  archetype: "local-business-trust",
  label: "Footer Content - Local Business Trust Premium",
  description:
    "Dark scoped pre-footer with newsletter, brand assurance, service columns, and social/legal links.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "rich",
};

function renderAttribution(attribution: FooterContentModel["attribution"]) {
  if (!attribution) {
    return null;
  }

  return (
    <Text variant="body-small" tone="muted">
      {attribution.prefix ? `${attribution.prefix} ` : ""}
      <a className="ui-navlink ui-focus-ring" aria-label={attribution.ariaLabel} href={attribution.url}>
        {attribution.linkText}
      </a>
      {attribution.suffix ? ` ${attribution.suffix}` : ""}
    </Text>
  );
}

export function FooterContentLocalBusinessTrustPremium({
  brand,
  columns,
  newsletter,
  socials,
  legalLinks,
  attribution,
}: FooterContentModel) {
  return (
    <div
      className="sv-section-root ui-theme-scope"
      data-variant={FOOTER_CONTENT_LOCAL_BUSINESS_TRUST_PREMIUM_META.id}
      data-archetype={FOOTER_CONTENT_LOCAL_BUSINESS_TRUST_PREMIUM_META.archetype}
      data-theme="dark"
      data-visual="sleek"
    >
      <Section container="wide" size="lg" className="motion-fade-in">
        <Stack gap="loose">
          {newsletter ? (
            <Card className="glass shadow-lg">
              <Grid columns={2} gap="loose">
                <Stack gap="compact">
                  <Badge tone="warning" variant="tag" size="sm">
                    Seasonal maintenance reminders
                  </Badge>
                  <h2 className="text-heading-2 text-balance">{newsletter.title}</h2>
                  {newsletter.description ? <Text tone="muted">{newsletter.description}</Text> : null}
                </Stack>

                <Stack gap="compact">
                  <div className="ui-row">
                    <Input type="email" placeholder={newsletter.placeholder} />
                    <Button type="button">{newsletter.submitLabel}</Button>
                  </div>
                  {newsletter.consentNote ? (
                    <Text variant="body-small" tone="muted">
                      {newsletter.consentNote}
                    </Text>
                  ) : null}
                </Stack>
              </Grid>
            </Card>
          ) : null}

          <Grid columns="auto-fill" gap="loose">
            <Card className="ui-stack ui-stack--tight shadow-sm">
              {brand?.name ? <h3 className="text-heading-3">{brand.name}</h3> : null}
              {brand?.tagline ? <Text tone="muted">{brand.tagline}</Text> : null}
              <Text variant="body-small" tone="muted">
                Premium local-service websites work best when the close feels as trustworthy as the hero: clear coverage, direct contact paths, and repeatable proof.
              </Text>
            </Card>

            {columns?.map((column) => (
              <Card key={column.id} className="ui-stack ui-stack--tight shadow-sm">
                <h3 className="text-heading-5">{column.title}</h3>
                <Stack gap="tight">
                  {column.links.map((link) => (
                    <a key={link.href + link.label} className="ui-navlink ui-focus-ring" href={link.href}>
                      {link.label}
                    </a>
                  ))}
                </Stack>
              </Card>
            ))}

            <Card className="ui-stack ui-stack--tight shadow-sm">
              <h3 className="text-heading-5">Stay connected</h3>
              {socials?.length ? (
                <Stack gap="tight">
                  {socials.map((social) => (
                    <a key={social.id} className="ui-navlink ui-focus-ring" href={social.href}>
                      {social.label}
                    </a>
                  ))}
                </Stack>
              ) : null}
              {legalLinks?.length ? (
                <Stack gap="tight">
                  {legalLinks.map((link) => (
                    <a key={link.id} className="ui-navlink ui-focus-ring" href={link.href}>
                      {link.label}
                    </a>
                  ))}
                </Stack>
              ) : null}
            </Card>
          </Grid>

          {renderAttribution(attribution)}
        </Stack>
      </Section>
    </div>
  );
}