import { describe, expect, it } from "vitest";

import { parseSubmissionPayload, submitForm } from "@/server/modules/forms/form.service";

describe("form service", () => {
  it("accepts a valid contact submission", () => {
    const payload = parseSubmissionPayload({
      name: "Morgan Lee",
      email: "morgan@example.com",
      message: "Need a callback about template delivery.",
      website: "",
    });

    const result = submitForm("contact", payload);
    expect(result.accepted).toBe(true);
  });

  it("rejects honeypot submissions", () => {
    const payload = parseSubmissionPayload({
      name: "Spam User",
      email: "spam@example.com",
      message: "This should not go through.",
      website: "https://spam.invalid",
    });

    const result = submitForm("contact", payload);
    expect(result.accepted).toBe(false);
    if (!result.accepted) {
      expect(result.code).toBe("HONEYPOT_TRIGGERED");
    }
  });

  it("rejects unknown form identifiers", () => {
    const payload = parseSubmissionPayload({
      name: "Morgan Lee",
      email: "morgan@example.com",
      message: "Need a callback about template delivery.",
    });

    const result = submitForm("unknown", payload);
    expect(result.accepted).toBe(false);
    if (!result.accepted) {
      expect(result.code).toBe("FORM_NOT_FOUND");
    }
  });
});