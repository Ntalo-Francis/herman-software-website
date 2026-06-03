import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const BREVO_LIST_ID = process.env.BREVO_NEWSLETTER_LIST_ID;

    if (!BREVO_API_KEY || !BREVO_LIST_ID) {
      console.log("Newsletter signup (Brevo not configured):", email);
      return NextResponse.json({ success: true, message: "Subscribed! (demo mode)" });
    }

    // Create or update contact in Brevo
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [parseInt(BREVO_LIST_ID)],
        updateEnabled: true,
      }),
    });

    if (res.ok || res.status === 204) {
      return NextResponse.json({ success: true, message: "Subscribed! Check your inbox." });
    }

    const data = await res.json();

    if (data.code === "duplicate_parameter") {
      return NextResponse.json({ success: true, message: "You're already subscribed!" });
    }

    console.error("Brevo error:", data);
    return NextResponse.json({ error: "Subscription failed. Please try again." }, { status: 400 });
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}