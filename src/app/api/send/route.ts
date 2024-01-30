import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";
import nodemailer from "nodemailer";

const postSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  message: yup.string().required("Message is required"),
});

export async function POST(request: Request) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAILER_EMAIL,
      pass: process.env.MAILER_SECRET_KEY,
    },
  });

  try {
    const { email, message, name } = await postSchema.validate(await request.json());

    await transporter.sendMail({
      from: "blopez4434@gmail.com",
      to: "blopez4434@gmail.com",
      subject: `Message from ${name}`,
      text: message,
      html: `
        <p>Message from ${name}</p>
        <p>${message}</p>
        <p>${email}</p>
      `,
    });

    return NextResponse.json({ message: "Message sent" });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
