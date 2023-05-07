import { sendEmail } from "../../lib/sendMail";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;
      await sendEmail({ name, email, message });

      res.status(200).json({ message: "Email envoyé avec succès." });
    } catch (error) {
      res
        .status(500)
        .json({
          message: "Une erreur s'est produite lors de l'envoi de l'email.",
        });
    }
  } else {
    res.status(405).json({ message: "Méthode non autorisée." });
  }
}
