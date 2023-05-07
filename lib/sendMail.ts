import nodemailer from "nodemailer";

export async function sendEmail({ name, email, message }) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `Nouveau message de ${name} via InnoMag`,
    text: `
      Nom: ${name}
      Email: ${email}

      Message:
      ${message}
    `,
  };

  await transporter.sendMail(mailOptions);
}
