import { Card } from "@/ds/components/Card";
import { SectionPattern } from "@/ds/composition/patterns/SectionPattern";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";
import { Avatar } from "@/ds/primitives/Avatar";
import { Grid } from "@/ds/primitives/Grid";
import { Stack } from "@/ds/primitives/Stack";
import { Text } from "@/ds/primitives/Text";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";

type TeamModel = Extract<PublicSectionModel, { kind: "team" }>;

export const TEAM_DASHBOARD_OPS_DIRECTORY_META: SectionVariantMeta = {
  id: "team-dashboard-ops-directory",
  kind: "team",
  archetype: "dashboard-ops",
  label: "Team - Dashboard Ops Directory",
  description:
    "Dense operator directory with avatar, role, bio, and utility links in a structured card grid.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
  isDefault: true,
};

export function TeamDashboardOpsDirectory(props: TeamModel) {
  const sectionHeader = props.header?.title
    ? {
        kicker: props.header.kicker,
        title: props.header.title,
        lede: props.header.lede,
      }
    : undefined;

  return (
    <div
      className="sv-section-root sv-team-dashboard-ops-directory"
      data-variant={TEAM_DASHBOARD_OPS_DIRECTORY_META.id}
      data-archetype={TEAM_DASHBOARD_OPS_DIRECTORY_META.archetype}
    >
      <SectionPattern container="wide" header={sectionHeader}>
        <Grid columns={3} className="motion-fade-in">
          {props.members.map((member) => (
            <Card key={member.id}>
              <Stack gap="compact">
                <Avatar
                  src={member.avatar?.src}
                  alt={member.avatar?.alt}
                  name={member.name}
                  size="xl"
                />
                <Stack gap="tight">
                  <h3 className="text-heading-4">{member.name}</h3>
                  <Text variant="body-small" tone="muted">
                    {member.role}
                  </Text>
                  {member.bio ? <Text tone="muted">{member.bio}</Text> : null}
                </Stack>
                {member.socials?.length ? (
                  <div className="ui-row">
                    {member.socials.map((social) => (
                      <a key={social.id} className="ui-navlink ui-focus-ring" href={social.href}>
                        {social.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </Stack>
            </Card>
          ))}
        </Grid>
      </SectionPattern>
    </div>
  );
}