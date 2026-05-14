import { Container, PublicSiteShell } from "@/ds";
import { ROUTES } from "@/app/route-map";
import { SITE_PREVIEW_PRESET } from "@/app/site-preview-preset";

import styles from "./marketing-preview.module.css";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`ui-page ${styles.previewRoot}`}
      data-theme="light"
      data-density="spacious"
      data-visual="sleek"
      data-site-preview="premium-home-services"
    >
      <div className={`ui-band bg-accent text-on-primary ${styles.utilityBar}`}>
        <Container>
          <div className="ui-section ui-section--sm">
            <div className={`ui-row ui-row--between ${styles.utilityInner}`}>
              <div className={`ui-row ${styles.utilityCopy}`}>
                <span className="text-overline">Chicago service coverage</span>
                <span className="text-body-small">Mon-Sat 7am-7pm</span>
              </div>
              <div className={`ui-row ${styles.utilityActions}`}>
                <a className={`ui-focus-ring text-body-small ${styles.utilityAction}`} href="tel:+13125550198">
                  Call dispatch
                </a>
                <a
                  className={`ui-focus-ring text-body-small ${styles.utilityAction}`}
                  href={ROUTES.contact}
                >
                  Book estimate
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <PublicSiteShell config={SITE_PREVIEW_PRESET.config}>{children}</PublicSiteShell>
    </div>
  );
}
