"use client";

import * as React from "react";

import {
  Accordion,
  AccordionItem,
  Alert,
  Avatar,
  Badge,
  Banner,
  Breadcrumbs,
  Button,
  Card,
  Checkbox,
  EmptyState,
  Grid,
  Input,
  MetricCard,
  Pagination,
  Radio,
  RangeSlider,
  Select,
  Stack,
  Switch,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTrigger,
  Textarea,
  Timeline,
} from "@/ds";

function GalleryCard({ title, body, children }: { title: string; body: string; children: React.ReactNode }) {
  return (
    <Card style={{ padding: "1rem", height: "100%" }}>
      <Stack gap="compact">
        <div>
          <h3 className="text-heading-4" style={{ marginBottom: "0.35rem" }}>
            {title}
          </h3>
          <p className="text-body-small" style={{ color: "var(--ds-color-foreground-secondary)" }}>
            {body}
          </p>
        </div>
        {children}
      </Stack>
    </Card>
  );
}

export function ComponentGallery() {
  const [page, setPage] = React.useState(3);

  return (
    <Stack>
      <section>
        <h2 className="text-heading-3" style={{ marginBottom: "0.75rem" }}>
          Live Primitive Gallery
        </h2>
        <Grid columns={2}>
          <GalleryCard
            title="Buttons"
            body="Primary, secondary, ghost, text, and tone variants rendered from the actual DS primitives."
          >
            <div className="ui-row" style={{ gap: "0.5rem", flexWrap: "wrap" }}>
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="text">Text</Button>
              <Button tone="danger">Danger</Button>
              <Button isLoading loadingText="Working">
                Loading
              </Button>
            </div>
          </GalleryCard>

          <GalleryCard
            title="Inputs"
            body="Core form controls with the same tokens and focus states used in product and marketing surfaces."
          >
            <Stack gap="compact">
              <Input placeholder="Name" defaultValue="Jordan Lee" />
              <Input placeholder="Search" startSlot={<span aria-hidden="true">⌕</span>} endSlot={<span aria-hidden="true">⌘K</span>} />
              <Select defaultValue="growth">
                <option value="">Choose a team</option>
                <option value="growth">Growth</option>
                <option value="product">Product</option>
                <option value="ops">Ops</option>
              </Select>
              <Textarea placeholder="Describe the work to preview" defaultValue="We need a complete audit-ready preview of the design system." rows={4} autoResize />
            </Stack>
          </GalleryCard>

          <GalleryCard
            title="Selection Controls"
            body="Boolean and scalar primitives used by forms, filters, and preference surfaces."
          >
            <Stack gap="compact">
              <Checkbox defaultChecked label="Email alerts enabled" />
              <Checkbox indeterminate label="Partially applied selection" />
              <Radio name="plan" value="starter" label="Starter plan" description="Good for early teams." defaultChecked />
              <Radio name="plan" value="growth" label="Growth plan" description="Adds reporting and automations." />
              <Switch defaultChecked label="Live preview mode" />
              <RangeSlider min={0} max={100} defaultValue={68} label="Density" valueText="68 percent" />
            </Stack>
          </GalleryCard>

          <GalleryCard
            title="Identity"
            body="Avatar states and identity treatments used across team, customer, and dashboard views."
          >
            <div className="ui-row" style={{ gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
              <Avatar name="Jordan Lee" status="online" />
              <Avatar name="Mina Patel" size="lg" status="busy" />
              <Avatar name="Avery Stone" size="xl" shape="rounded" />
              <Avatar
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
                alt="Portrait sample"
                size="2xl"
                status="away"
              />
            </div>
          </GalleryCard>
        </Grid>
      </section>

      <section>
        <h2 className="text-heading-3" style={{ marginBottom: "0.75rem" }}>
          Live Component Gallery
        </h2>
        <Grid columns={2}>
          <GalleryCard
            title="Status and Messaging"
            body="Badges, alerts, and banners rendered with real DS tones and semantics."
          >
            <Stack gap="compact">
              <div className="ui-row" style={{ gap: "0.5rem", flexWrap: "wrap" }}>
                <Badge>Neutral</Badge>
                <Badge tone="accent">Accent</Badge>
                <Badge tone="success">Success</Badge>
                <Badge tone="warning">Warning</Badge>
                <Badge tone="danger">Danger</Badge>
                <Badge tone="info" variant="dot">
                  Info
                </Badge>
              </div>
              <Alert tone="success" title="Verification passed">
                Typecheck, lint, test, build, audit, and accessibility checks all cleared.
              </Alert>
              <Banner
                tone="info"
                title="Preview clone active"
                actions={<Button size="sm" variant="secondary">Open logs</Button>}
              >
                This gallery runs against the refreshed clone, not the canonical DS root.
              </Banner>
            </Stack>
          </GalleryCard>

          <GalleryCard
            title="Navigation"
            body="Breadcrumb and pagination patterns for docs, dashboards, and list-heavy surfaces."
          >
            <Stack gap="compact">
              <Breadcrumbs
                items={[
                  { id: "home", label: "Preview", href: "#" },
                  { id: "library", label: "Components", href: "#" },
                  { id: "detail", label: "Live Gallery" },
                ]}
              />
              <Pagination page={page} pageCount={9} onPageChange={setPage} />
            </Stack>
          </GalleryCard>

          <GalleryCard
            title="Disclosure"
            body="Interactive tabs and accordion patterns using the DS focus and keyboard behavior."
          >
            <Stack gap="compact">
              <Tabs defaultValue="tokens" variant="pill">
                <TabsList>
                  <TabsTrigger value="tokens">Tokens</TabsTrigger>
                  <TabsTrigger value="motion">Motion</TabsTrigger>
                  <TabsTrigger value="coverage">Coverage</TabsTrigger>
                </TabsList>
                <TabsPanel value="tokens">Inspect foundations for colors, spacing, shadows, and typography.</TabsPanel>
                <TabsPanel value="motion">Motion presets are registered, named, and retrievable for deterministic execution.</TabsPanel>
                <TabsPanel value="coverage">Sections and wireframes remain the fastest way to audit composition coverage.</TabsPanel>
              </Tabs>

              <Accordion type="multiple" defaultValue={["a"]}>
                <AccordionItem value="a" title="What is this page for?">
                  It shows live DS components instead of only listing source filenames.
                </AccordionItem>
                <AccordionItem value="b" title="What is still covered elsewhere?">
                  Section variants, full wireframes, and the missing tracker remain on dedicated preview routes.
                </AccordionItem>
              </Accordion>
            </Stack>
          </GalleryCard>

          <GalleryCard
            title="Data and Empty States"
            body="Composable content blocks used in dashboards, operational views, and product moments."
          >
            <Stack gap="compact">
              <MetricCard
                label="Components audited"
                value="92"
                delta="+14%"
                trend="up"
                comparison="vs previous preview snapshot"
                hint="Includes primitives, components, layouts, widgets, visuals, and runtime surfaces."
              />
              <Timeline
                items={[
                  { id: "t1", title: "Canonical DS updated", meta: "09:10", body: "Legacy site routing removed from the main DS runtime." },
                  { id: "t2", title: "Preview clone refreshed", meta: "10:05", body: "New clone created under DOC/output/runs for visual QA." },
                  { id: "t3", title: "Coverage expanded", meta: "11:25", body: "New section kinds and wireframes now resolve in the clone preview." },
                ]}
              />
              <EmptyState
                title="No missing zero-kind gaps"
                description="The refreshed preview shows full declared kind coverage; remaining work is now depth and breadth, not empty categories."
                actions={<Button size="sm">Review sparse kinds</Button>}
                variant="completed"
              />
            </Stack>
          </GalleryCard>
        </Grid>
      </section>
    </Stack>
  );
}