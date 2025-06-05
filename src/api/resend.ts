"use server";
// import ContactEmail from "@/_components/ContactEmail";

// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY);
// import { NextResponse } from "next/server";

// export const sendEmail = async () => {
//   await resend.emails.send({
//     to: "emmanueljoseph1320@gmail.com",
//     from: "enviado website <enviadoglobalmedia@gmail.com>",
//     subject: "Enviado Website Contact Form Submission",
//     text: "You have a new contact form submission.",
//   });
// };

// import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  const { data, error } = await resend.emails.send({
    from: `enviado website <${process.env.RESEND_API_KEY}>`,
    to: "emmanueljoseph1320@gmail.com",
    subject: "Hello world",
    // react: EmailTemplate({ firstName: "John" }),
    text: "You have a new contact form submission.",
  });

  if (error) {
    return Response.json({ error });
  }

  return Response.json(data);
}
