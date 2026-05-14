import type { PublicPageModel } from "../../../platform/publicSitePreset";
import type { WireframeMeta } from "./_schema";

export const PAGE_LOCAL_BUSINESS_TRUST_CONTACT_META: WireframeMeta = {
  id: "page-local-business-trust-contact",
  archetype: "local-business-trust",
  purpose: "contact",
  shell: "public",
  label: "Page - Local Business Trust Contact",
  description:
    "Process reassurance followed by a contact split layout for service businesses that need trust and fast response signals.",
  density: "comfortable",
  complexity: "standard",
  isDefault: true,
  sections: [
    { kind: "process-steps", variantId: "process-steps-vertical" },
    { kind: "contact", variantId: "contact-local-business-trust-split" },
  ],
};

export function getLocalBusinessTrustContactDemoPage(): PublicPageModel {
  return {
    id: "demo-local-business-trust-contact",
    title: "Local Business Trust - Demo Contact",
    archetype: "local-business-trust",
    sections: [
      {
        id: "process",
        kind: "process-steps",
        variant: "process-steps-vertical",
        header: {
          kicker: "Response flow",
          title: "What happens after you contact us",
          lede: "Set expectations clearly so prospects know exactly when they will hear back and what information they should prepare.",
        },
        steps: [
          { id: "s1", number: "01", title: "Submit details", description: "Share your project scope, timeline, and preferred contact method." },
          { id: "s2", number: "02", title: "Get a callback", description: "A specialist reviews the request and responds during business hours." },
          { id: "s3", number: "03", title: "Book a visit", description: "We confirm next steps, availability, and any required documents." },
        ],
      },
      {
        id: "contact",
        kind: "contact",
        variant: "contact-local-business-trust-split",
        header: {
          kicker: "Reach us",
          title: "Talk to the team",
          lede: "Phone, email, hours, and a structured inquiry form all live in one trusted contact surface.",
        },
        channels: [
          { id: "email", kind: "email", label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
          { id: "phone", kind: "phone", label: "Phone", value: "+1 (555) 014-2244", href: "tel:+15550142244" },
          { id: "hours", kind: "hours", label: "Hours", value: "Mon-Fri, 8am-6pm" },
          { id: "address", kind: "address", label: "Address", value: "450 Market Street, Suite 12" },
        ],
        form: {
          submitLabel: "Send inquiry",
          consentNote: "Mock UI only. Connect this form to your CRM or backend workflow.",
          fields: [
            { id: "name", label: "Full name", type: "text", required: true, placeholder: "Avery Morgan" },
            { id: "email", label: "Email", type: "email", required: true, placeholder: "avery@example.com" },
            { id: "service", label: "Service needed", type: "select", options: [
              { value: "consultation", label: "Consultation" },
              { value: "quote", label: "Quote" },
              { value: "support", label: "Support" }
            ] },
            { id: "details", label: "Project details", type: "textarea", placeholder: "Tell us what you need help with." },
          ],
        },
        map: {
          alt: "Downtown service office",
          embedUrl: "#",
        },
      },
    ],
  };
}