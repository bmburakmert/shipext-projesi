import { Resend } from "resend";

const resend = new Resend("YOUR_API_KEY");

export async function POST(req) {
  const body = await req.json();

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "youremail@gmail.com",
    subject: "New Contact Form Message",
    html: `
      <p><b>Name:</b> ${body.name}</p>
      <p><b>Email:</b> ${body.email}</p>
      <p><b>Subject:</b> ${body.subject}</p>
      <p><b>Message:</b> ${body.message}</p>
    `,
  });

  return Response.json({ success: true });
}