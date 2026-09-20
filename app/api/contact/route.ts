import { NextResponse } from "next/server";

// In-memory rate limiting tracker
const submissionTracker = new Map<string, { count: number; firstAttempt: number }>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Basic HTML sanitizer for emails
function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const forwardedFor = req.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown";

    // Rate limiting check
    const now = Date.now();
    const rateData = submissionTracker.get(clientIp);
    if (rateData) {
      if (now - rateData.firstAttempt < RATE_LIMIT_WINDOW_MS) {
        if (rateData.count >= MAX_REQUESTS_PER_WINDOW) {
          return NextResponse.json(
            {
              success: false,
              message: "Too many enquiries from your connection. Please call or WhatsApp us directly at +91 85109 29404.",
            },
            { status: 429 }
          );
        }
        rateData.count += 1;
      } else {
        submissionTracker.set(clientIp, { count: 1, firstAttempt: now });
      }
    } else {
      submissionTracker.set(clientIp, { count: 1, firstAttempt: now });
    }

    const body = await req.json();
    const { name, phone, email, service, message, honeypot } = body;

    // Honeypot anti-spam check
    if (honeypot && String(honeypot).trim() !== "") {
      return NextResponse.json({ success: true, message: "Thank you! Your enquiry has been received." });
    }

    // Required fields validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ success: false, message: "Please provide a valid full name." }, { status: 400 });
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 8) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid phone number (at least 8-10 digits)." },
        { status: 400 }
      );
    }

    if (!service || typeof service !== "string" || service.trim().length === 0) {
      return NextResponse.json({ success: false, message: "Please select the service required." }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length < 3) {
      return NextResponse.json(
        { success: false, message: "Please enter your message or project requirements." },
        { status: 400 }
      );
    }

    // Email format validation if provided
    if (email && typeof email === "string" && email.trim().length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return NextResponse.json({ success: false, message: "Please enter a valid email address." }, { status: 400 });
      }
    }

    const cleanName = sanitizeHtml(name.trim());
    const cleanPhone = sanitizeHtml(phone.trim());
    const cleanEmail = email && typeof email === "string" && email.trim() ? sanitizeHtml(email.trim()) : "Not provided";
    const cleanService = sanitizeHtml(service.trim());
    const cleanMessage = sanitizeHtml(message.trim()).replace(/\n/g, "<br>");
    const submissionTimestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const emailSubject = "New Website Enquiry – Mextech Security System & IT Solutions";

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Helvetica, Arial, sans-serif; background-color: #0f172a; color: #1e293b; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
          .header { background: #0f172a; padding: 28px; text-align: center; border-bottom: 4px solid #0284c7; }
          .header h1 { margin: 0; color: #ffffff; font-size: 20px; letter-spacing: 1px; font-weight: 700; text-transform: uppercase; }
          .header p { margin: 6px 0 0 0; color: #38bdf8; font-size: 13px; font-weight: 500; }
          .content { padding: 32px; }
          .badge { display: inline-block; background: #e0f2fe; color: #0369a1; padding: 6px 14px; border-radius: 20px; font-weight: 600; font-size: 14px; margin-bottom: 20px; }
          .field-group { margin-bottom: 18px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; }
          .field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; font-weight: 700; margin-bottom: 4px; }
          .field-value { font-size: 15px; color: #0f172a; font-weight: 500; }
          .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #0284c7; border-radius: 6px; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155; margin-top: 16px; }
          .footer { background: #f8fafc; padding: 20px 32px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>MEXTECH</h1>
            <p>Security System &amp; IT Solutions — Gurugram</p>
          </div>
          <div class="content">
            <div class="badge">New Website Lead</div>
            <div class="field-group">
              <div class="field-label">Customer Name</div>
              <div class="field-value">${cleanName}</div>
            </div>
            <div class="field-group">
              <div class="field-label">Phone Number</div>
              <div class="field-value"><a href="tel:${cleanPhone}" style="color: #0284c7; text-decoration: none; font-weight: 600;">${cleanPhone}</a> (Click to call)</div>
            </div>
            <div class="field-group">
              <div class="field-label">Email Address</div>
              <div class="field-value">${cleanEmail}</div>
            </div>
            <div class="field-group">
              <div class="field-label">Service Requested</div>
              <div class="field-value" style="color: #0284c7; font-weight: 700;">${cleanService}</div>
            </div>
            <div class="field-label" style="margin-top: 20px;">Customer Message / Requirement</div>
            <div class="message-box">${cleanMessage}</div>
          </div>
          <div class="footer">
            <p style="margin: 0 0 6px 0;"><strong>Source:</strong> Mextech Website Online Enquiry Form</p>
            <p style="margin: 0;"><strong>Received:</strong> ${submissionTimestamp} (IST)</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey && resendApiKey.trim() !== "" && !resendApiKey.includes("123456789")) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(resendApiKey);

        const emailResult = await resend.emails.send({
          from: "Mextech Enquiries <onboarding@resend.dev>",
          to: ["mextech.ncr@gmail.com"],
          subject: emailSubject,
          html: emailHtml,
          replyTo: email && email.includes("@") ? email : undefined,
        });

        if (emailResult.error) {
          console.error("Resend API error:", emailResult.error);
        } else {
          console.log("Resend email dispatched successfully:", emailResult.data?.id);
        }
      } catch (emailErr) {
        console.error("Error dispatching email via Resend:", emailErr);
      }
    } else {
      console.log("ℹ️ [MEXTECH ENQUIRY RECEIVED IN APP ROUTER]");
      console.log(`Name: ${cleanName}`);
      console.log(`Phone: ${cleanPhone}`);
      console.log(`Email: ${cleanEmail}`);
      console.log(`Service: ${cleanService}`);
      console.log(`Message: ${cleanMessage}`);
      console.log(`Timestamp: ${submissionTimestamp}`);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your enquiry has been received. Our team will contact you shortly.",
    });
  } catch (err) {
    console.error("Internal error processing enquiry:", err);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while sending your enquiry. Please try again or contact us directly by phone or WhatsApp.",
      },
      { status: 500 }
    );
  }
}
