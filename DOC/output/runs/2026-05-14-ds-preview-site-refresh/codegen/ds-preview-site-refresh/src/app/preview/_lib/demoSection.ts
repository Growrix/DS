import type { PublicSectionModel } from "@/ds";

type VariantMeta = {
  id: string;
  kind: string;
  label: string;
};

type BlogListModel = Extract<PublicSectionModel, { kind: "blogList" }>;
type NewsletterModel = Extract<PublicSectionModel, { kind: "newsletter" }>;
type TeamModel = Extract<PublicSectionModel, { kind: "team" }>;
type ContactModel = Extract<PublicSectionModel, { kind: "contact" }>;
type FooterContentModel = Extract<PublicSectionModel, { kind: "footer-content" }>;

export function buildDemoSectionFromVariant(meta: VariantMeta): PublicSectionModel {
  switch (meta.kind) {
    case "hero":
      return {
        id: `${meta.id}-section`,
        kind: "hero",
        variant: meta.id,
        kicker: "Variant preview",
        title: meta.label,
        lede: "This is auto-generated sample content used to visually validate the selected hero variant.",
        primaryAction: { label: "Primary action", href: "#" },
        secondaryAction: { label: "Secondary action", href: "#" },
        media: {
          src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1600&q=80",
          alt: "Preview media",
        },
        trustChips: [
          { id: "trust-1", label: "Trusted by 2,000+ teams" },
          { id: "trust-2", label: "99.9% uptime" },
        ],
      };

    case "features":
      return {
        id: `${meta.id}-section`,
        kind: "features",
        variant: meta.id,
        header: {
          kicker: "Capabilities",
          title: meta.label,
          lede: "Feature cards below are synthetic data to validate visual composition.",
        },
        features: [
          { id: "f1", title: "Realtime analytics", description: "Track all critical metrics live.", icon: "sparkles" },
          { id: "f2", title: "Smart automation", description: "Automate repetitive workflows.", icon: "cpu" },
          { id: "f3", title: "Security controls", description: "Role-based access and audit logs.", icon: "shield" },
          { id: "f4", title: "Integrations", description: "Connect your existing stack instantly.", icon: "plug" },
        ],
      };

    case "testimonials":
      return {
        id: `${meta.id}-section`,
        kind: "testimonials",
        variant: meta.id,
        header: {
          kicker: "Social proof",
          title: meta.label,
          lede: "Customer voices used for preview-only rendering.",
        },
        items: [
          { id: "t1", quote: "The fastest rollout we have ever done.", name: "Aisha Rahman", meta: "CTO, Northgrid" },
          { id: "t2", quote: "The team now ships twice as fast.", name: "Evan Miller", meta: "Ops Lead, Lumio" },
          { id: "t3", quote: "Clear ROI in the first month.", name: "Mina Das", meta: "Founder, Arcflow" },
        ],
      };

    case "faq":
      return {
        id: `${meta.id}-section`,
        kind: "faq",
        variant: meta.id,
        header: {
          kicker: "Questions",
          title: meta.label,
          lede: "Common buyer questions rendered via sample FAQ content.",
        },
        items: [
          { id: "q1", q: "Is there a free trial?", a: "Yes, a 14-day full-feature trial is available." },
          { id: "q2", q: "Can we cancel anytime?", a: "Yes, there are no long-term lock-ins." },
          { id: "q3", q: "Do you support SSO?", a: "Yes, SAML and OIDC are supported on paid tiers." },
        ],
      };

    case "blogList": {
      const section: BlogListModel = {
        id: `${meta.id}-section`,
        kind: "blogList",
        variant: meta.id,
        header: {
          kicker: "Editorial archive",
          title: meta.label,
          lede: "Preview-only article cards used to validate blog index and case-study list layouts.",
        },
        posts: [
          {
            id: "post-1",
            title: "Designing for slower, clearer interfaces",
            excerpt: "Why intentional pacing improves comprehension on high-value pages.",
            href: "#",
          },
          {
            id: "post-2",
            title: "The anatomy of a trustworthy landing page",
            excerpt: "How structure, proof, and rhythm combine into conviction.",
            href: "#",
          },
          {
            id: "post-3",
            title: "When to use sparse motion",
            excerpt: "Motion should narrate, not decorate.",
            href: "#",
          },
        ],
      };

      return section;
    }

    case "cta":
      return {
        id: `${meta.id}-section`,
        kind: "cta",
        variant: meta.id,
        header: {
          kicker: "Call to action",
          title: meta.label,
          lede: "This CTA is rendered with synthetic conversion copy.",
        },
        body: "Start a guided setup and launch in less than one week.",
        primaryAction: { label: "Start now", href: "#" },
        secondaryAction: { label: "Book demo", href: "#" },
      };

    case "newsletter": {
      const section: NewsletterModel = {
        id: `${meta.id}-section`,
        kind: "newsletter",
        variant: meta.id,
        header: {
          kicker: "Lifecycle nurture",
          title: meta.label,
          lede: "Use this signup block to test compact opt-in surfaces and conversion framing.",
        },
        title: "Weekly field notes, product thinking, and launch updates.",
      };

      return section;
    }

    case "stats-band":
      return {
        id: `${meta.id}-section`,
        kind: "stats-band",
        variant: meta.id,
        stats: [
          { id: "s1", value: "87%", label: "Faster onboarding" },
          { id: "s2", value: "2.3x", label: "Pipeline growth" },
          { id: "s3", value: "99.95%", label: "Service uptime" },
          { id: "s4", value: "24/7", label: "Support coverage" },
        ],
      };

    case "process-steps":
      return {
        id: `${meta.id}-section`,
        kind: "process-steps",
        variant: meta.id,
        header: {
          kicker: "Process",
          title: meta.label,
          lede: "A simplified process walkthrough for structural preview.",
        },
        steps: [
          { id: "p1", number: "01", title: "Discovery", description: "Capture goals and constraints." },
          { id: "p2", number: "02", title: "Implementation", description: "Configure and integrate your stack." },
          { id: "p3", number: "03", title: "Launch", description: "Go live with monitoring and support." },
        ],
      };

    case "logo-cloud":
      return {
        id: `${meta.id}-section`,
        kind: "logo-cloud",
        variant: meta.id,
        header: {
          kicker: "Trusted by",
          title: meta.label,
        },
        logos: [
          { id: "l1", label: "Northgrid" },
          { id: "l2", label: "Arcflow" },
          { id: "l3", label: "Loomic" },
          { id: "l4", label: "Vectora" },
          { id: "l5", label: "Mettl" },
        ],
      };

    case "case-studies":
      return {
        id: `${meta.id}-section`,
        kind: "case-studies",
        variant: meta.id,
        header: {
          kicker: "Results",
          title: meta.label,
        },
        items: [
          {
            id: "c1",
            title: "Reduced churn by 31%",
            excerpt: "A retention program powered by behavioral triggers.",
            href: "#",
            tags: ["SaaS", "Growth"],
          },
          {
            id: "c2",
            title: "Cut response time by 64%",
            excerpt: "AI-assisted service triage and escalation rules.",
            href: "#",
            tags: ["Support", "AI"],
          },
        ],
      };

    case "pricing":
      return {
        id: `${meta.id}-section`,
        kind: "pricing",
        variant: meta.id,
        header: {
          kicker: "Plans",
          title: meta.label,
        },
        billingToggle: {
          monthlyLabel: "Monthly",
          yearlyLabel: "Yearly",
          defaultCadence: "monthly",
        },
        tiers: [
          {
            id: "price-1",
            name: "Starter",
            price: { monthly: "$29", yearly: "$290", suffix: "/mo" },
            features: ["Up to 5 members", "Core analytics", "Email support"],
            cta: { label: "Choose Starter", href: "#" },
          },
          {
            id: "price-2",
            name: "Growth",
            badge: "Popular",
            highlight: true,
            price: { monthly: "$79", yearly: "$790", suffix: "/mo" },
            features: ["Up to 25 members", "Advanced automations", "Priority support"],
            cta: { label: "Choose Growth", href: "#" },
          },
          {
            id: "price-3",
            name: "Scale",
            price: { monthly: "$149", yearly: "$1490", suffix: "/mo" },
            features: ["Unlimited members", "SLA", "Dedicated CSM"],
            cta: { label: "Contact sales", href: "#" },
          },
        ],
      };

    case "team": {
      const section: TeamModel = {
        id: `${meta.id}-section`,
        kind: "team",
        variant: meta.id,
        header: {
          kicker: "Operators",
          title: meta.label,
          lede: "Preview roster content for people-focused pages, studio teams, and internal directories.",
        },
        members: [
          {
            id: "member-1",
            name: "Avery Stone",
            role: "Head of Operations",
            bio: "Coordinates rollouts, incident response, and cross-functional execution rhythms.",
            avatar: {
              src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
              alt: "Portrait of Avery Stone",
            },
            socials: [
              { id: "member-1-linkedin", label: "LinkedIn", href: "#" },
              { id: "member-1-email", label: "Email", href: "mailto:avery@example.com" },
            ],
          },
          {
            id: "member-2",
            name: "Mina Patel",
            role: "Customer Success Director",
            bio: "Shapes onboarding systems and trust-building follow-up for high-intent accounts.",
            avatar: {
              src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
              alt: "Portrait of Mina Patel",
            },
            socials: [
              { id: "member-2-linkedin", label: "LinkedIn", href: "#" },
            ],
          },
          {
            id: "member-3",
            name: "Jon Park",
            role: "Platform Reliability Lead",
            bio: "Owns observability, runbooks, and the escalation pathways behind a stable product surface.",
            avatar: {
              src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
              alt: "Portrait of Jon Park",
            },
            socials: [
              { id: "member-3-linkedin", label: "LinkedIn", href: "#" },
            ],
          },
        ],
      };

      return section;
    }

    case "contact": {
      const section: ContactModel = {
        id: `${meta.id}-section`,
        kind: "contact",
        variant: meta.id,
        header: {
          kicker: "Local support",
          title: meta.label,
          lede: "Sample contact channels and form fields used to validate trust-first inquiry layouts.",
        },
        channels: [
          {
            id: "contact-email",
            kind: "email",
            label: "Email",
            value: "hello@example.com",
            href: "mailto:hello@example.com",
          },
          {
            id: "contact-phone",
            kind: "phone",
            label: "Phone",
            value: "+1 (555) 014-2874",
            href: "tel:+15550142874",
          },
          {
            id: "contact-hours",
            kind: "hours",
            label: "Hours",
            value: "Mon-Fri, 8:00 AM-6:00 PM",
          },
          {
            id: "contact-address",
            kind: "address",
            label: "Studio",
            value: "200 Harbor Avenue, Suite 4, Portland, ME",
          },
        ],
        form: {
          fields: [
            {
              id: "name",
              label: "Full name",
              type: "text",
              required: true,
              placeholder: "Jordan Lee",
            },
            {
              id: "email",
              label: "Work email",
              type: "email",
              required: true,
              placeholder: "jordan@company.com",
            },
            {
              id: "company",
              label: "Company",
              type: "text",
              placeholder: "Northgrid",
            },
            {
              id: "need",
              label: "What do you need?",
              type: "select",
              required: true,
              placeholder: "Choose one",
              options: [
                { value: "new-project", label: "New project" },
                { value: "migration", label: "Migration support" },
                { value: "audit", label: "System audit" },
              ],
            },
            {
              id: "message",
              label: "Project details",
              type: "textarea",
              required: true,
              placeholder: "Tell us what you are building, what is blocked, and what success looks like.",
            },
          ],
          submitLabel: "Send inquiry",
          consentNote: "By submitting, you agree to be contacted about your request.",
        },
        map: {
          embedUrl: "https://maps.google.com/?q=200+Harbor+Avenue+Portland+ME",
          alt: "Open map for the Portland studio",
        },
      };

      return section;
    }

    case "footer-content": {
      const section: FooterContentModel = {
        id: `${meta.id}-section`,
        kind: "footer-content",
        variant: meta.id,
        brand: {
          name: "Northgrid Studio",
          tagline: "Design systems, implementation strategy, and product-grade frontend execution.",
        },
        columns: [
          {
            id: "footer-services",
            title: "Services",
            links: [
              { id: "services-audit", label: "Audit", href: "#" },
              { id: "services-build", label: "Build", href: "#" },
              { id: "services-scale", label: "Scale", href: "#" },
            ],
          },
          {
            id: "footer-company",
            title: "Company",
            links: [
              { id: "company-about", label: "About", href: "#" },
              { id: "company-journal", label: "Journal", href: "#" },
              { id: "company-contact", label: "Contact", href: "#" },
            ],
          },
        ],
        newsletter: {
          title: "Subscribe to release notes",
          description: "Monthly notes on launches, audits, and practical system decisions.",
          placeholder: "Email address",
          submitLabel: "Subscribe",
          consentNote: "No spam. One concise update each month.",
        },
        socials: [
          { id: "social-linkedin", label: "LinkedIn", href: "#" },
          { id: "social-github", label: "GitHub", href: "#" },
          { id: "social-x", label: "X", href: "#" },
        ],
        appLinks: {
          appStore: { href: "#", alt: "Download on the App Store" },
          playStore: { href: "#", alt: "Get it on Google Play" },
        },
        legalLinks: [
          { id: "legal-privacy", label: "Privacy", href: "#" },
          { id: "legal-terms", label: "Terms", href: "#" },
        ],
        attribution: {
          prefix: "Built with",
          linkText: meta.label,
          url: "#",
          ariaLabel: meta.label,
          suffix: "for preview validation.",
        },
      };

      return section;
    }

    default:
      return {
        id: `${meta.id}-section`,
        kind: "cta",
        variant: undefined,
        header: {
          title: `Unsupported kind for preview: ${meta.kind}`,
        },
        body: "No sample content generator is defined for this kind yet.",
        primaryAction: { label: "Back to catalog", href: "/preview/sections" },
      };
  }
}
