import { z } from "zod";

const submissionSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  message: z.string().min(10),
  phone: z.string().min(7).optional(),
  website: z.string().optional(),
});

const acceptedForms = new Set(["contact", "quote", "booking"]);

export type SubmissionPayload = z.infer<typeof submissionSchema>;

export function parseSubmissionPayload(payload: unknown): SubmissionPayload {
  return submissionSchema.parse(payload);
}

export function submitForm(formId: string, payload: SubmissionPayload) {
  if (!acceptedForms.has(formId)) {
    return {
      accepted: false,
      code: "FORM_NOT_FOUND",
      message: `Unknown form '${formId}'.`,
    } as const;
  }

  if (payload.website && payload.website.trim().length > 0) {
    return {
      accepted: false,
      code: "HONEYPOT_TRIGGERED",
      message: "Spam protection was triggered.",
    } as const;
  }

  return {
    accepted: true,
    formId,
    lead: {
      name: payload.name,
      email: payload.email,
      message: payload.message,
      phone: payload.phone ?? null,
    },
  } as const;
}