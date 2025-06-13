export const runtime = "nodejs";

const nodemailer = require("nodemailer");

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const { name, company, email, message, services } = data;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const selectedServices = Object.entries(services)
    .filter(([, checked]) => checked)
    .map(([key]) => key.replace(/([A-Z])/g, " $1"))
    .join(", ");

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_RECEIVER,
    replyTo: email,
    subject: `New Form Submission from ${name}`,
    html: `
      <h3>Contact Details</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Selected Services:</strong> ${selectedServices}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
