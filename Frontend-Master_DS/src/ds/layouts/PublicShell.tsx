import * as React from "react";

import { Container } from "../primitives/Container";
import type { FontPresetId } from "../foundation/typography/fontPresetRegistry";

export type PublicShellProps = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  bottomNav?: React.ReactNode;
  floating?: React.ReactNode;
  /**
   * When provided, mounts `data-font-preset="<id>"` on the shell root so the
   * `ds.typography-presets.css` block for this preset takes effect across the
   * page subtree. No JS — pure CSS attribute selector cascade.
   */
  fontPresetId?: FontPresetId;
  children: React.ReactNode;
};

export function PublicShell({ header, footer, bottomNav, floating, fontPresetId, children }: PublicShellProps) {
  return (
    <div className="ui-page" data-font-preset={fontPresetId}>
      {header ? <div className="ui-band ui-band--surface ui-sticky-top">{header}</div> : null}
      <main
        className={bottomNav ? "ui-page-main ui-shell-content--pad-bottom-nav" : "ui-page-main"}
        id="main"
      >
        {children}
      </main>
      {footer ? <div className="ui-band">{footer}</div> : null}

      {bottomNav ? <div className="ui-only-mobile">{bottomNav}</div> : null}
      {floating ? floating : null}
    </div>
  );
}

export function PublicHeaderBar({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <div className="ui-header-pad">{children}</div>
    </Container>
  );
}
