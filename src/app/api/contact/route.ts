import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as z from "zod";

// Zod schema for validating the request body
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  mobile: z
    .string()
    .min(10, "Mobile number must be at least 10 digits")
    .max(15, "Mobile number must be at most 15 digits")
    .regex(/^[0-9+\-\s()]+$/, "Only numbers and standard symbols are allowed"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate request body
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: validation.error.format(),
        },
        { status: 400 }
      );
    }

    const { name, company, mobile, email, subject, message } = validation.data;

    // Retrieve environment variables
    const host = process.env.EMAIL_HOST || "smtp.titan.email";
    const portStr = process.env.EMAIL_PORT || "465";
    const port = parseInt(portStr, 10);
    const secure = process.env.EMAIL_SECURE === "true" || port === 465;
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const to = process.env.EMAIL_TO || "danishkkhan13@gmail.com";

    if (!user || !pass) {
      console.error("Email configuration is missing from environment variables.");
      return NextResponse.json(
        {
          success: false,
          error: "Internal server error. Mail configuration is incomplete.",
        },
        { status: 500 }
      );
    }

    // Configure SMTP transport
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    // Create a professionally styled HTML template for the email
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              color: #334155;
              background-color: #f8fafc;
              margin: 0;
              padding: 0;
              -webkit-font-smoothing: antialiased;
            }
            .container {
              max-width: 600px;
              margin: 30px auto;
              background: #ffffff;
              border: 1px solid #e2e8f0;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
            }
            .header {
              background-color: #0b1a30; /* brand-navy */
              color: #ffffff;
              padding: 24px 32px;
              text-align: left;
              border-bottom: 3px solid #097B3E; /* brand-green */
            }
            .header h2 {
              margin: 0;
              font-size: 20px;
              font-weight: 700;
              letter-spacing: -0.025em;
            }
            .content {
              padding: 32px;
            }
            .field-group {
              margin-bottom: 20px;
              border-bottom: 1px solid #f1f5f9;
              padding-bottom: 16px;
            }
            .field-group:last-child {
              border-bottom: none;
              padding-bottom: 0;
              margin-bottom: 0;
            }
            .field-label {
              font-size: 12px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              color: #097B3E; /* brand-green */
              margin-bottom: 6px;
            }
            .field-value {
              font-size: 15px;
              line-height: 1.5;
              color: #1e293b;
              font-weight: 500;
            }
            .message-box {
              background-color: #f8fafc;
              border: 1px solid #e2e8f0;
              border-radius: 8px;
              padding: 16px;
              font-style: italic;
              white-space: pre-wrap;
              color: #475569;
            }
            .footer {
              background-color: #f1f5f9;
              padding: 16px 32px;
              text-align: center;
              font-size: 12px;
              color: #64748b;
              border-top: 1px solid #e2e8f0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>OpenMarket - Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field-group">
                <div class="field-label">Sender Name</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Company / Business</div>
                <div class="field-value">${company}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Mobile Number</div>
                <div class="field-value">${mobile}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #097B3E; text-decoration: underline;">${email}</a></div>
              </div>
              <div class="field-group">
                <div class="field-label">Subject</div>
                <div class="field-value">${subject}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Message</div>
                <div class="field-value message-box">${message}</div>
              </div>
            </div>
            <div class="footer">
              This message was sent automatically from the OpenMarket Contact Us form.
            </div>
          </div>
        </body>
      </html>
    `;

    const textContent = `
OpenMarket - Contact Form Submission
------------------------------------
Sender Name: ${name}
Company / Business: ${company}
Mobile Number: ${mobile}
Email Address: ${email}
Subject: ${subject}
Message:
${message}
------------------------------------
This message was sent automatically from the OpenMarket Contact Us form.
    `.trim();

    // Send the email
    await transporter.sendMail({
      from: `"${name} (via OpenMarket)" <${user}>`,
      replyTo: email,
      to,
      subject: `[Contact Form] ${subject} - ${name}`,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Error in contact form submission API route:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email",
        message: error.message || "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}
