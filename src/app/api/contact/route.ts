import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validators";
import { sendEmail, buildContactEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the data
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // Build and send email
    const { subject, html } = buildContactEmail(result.data);
    const emailResult = await sendEmail({ subject, html });

    if (!emailResult.success) {
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully. We'll get back to you within 24 hours." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}