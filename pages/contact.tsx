import Head from "next/head";
import { useState } from "react";
import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";

export default function Contact({ preview }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setSubmitSuccess(true);
      } else {
        throw new Error(
          "Une erreur s'est produite lors de l'envoi du message."
        );
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setSubmitting(false);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        <Head>
          <title>Contact - InnoMag</title>
        </Head>
        <h1 className="text-3xl font-bold mb-6">Contactez-nous</h1>
        {submitSuccess ? (
          <div className="bg-green-100 border border-green-300 text-green-700 p-4 rounded-md mb-6">
            Votre message a été envoyé avec succès. Nous vous répondrons
            bientôt.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="text-sm mb-2 block text-gray-600"
              >
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-md w-full p-2 text-gray-700 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="text-sm mb-2 block text-gray-600"
              >
                Adresse e-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-md w-full p-2 text-gray-700 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="text-sm mb-2 block text-gray-600"
              >
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="border rounded-md w-full p-2 text-gray-700 focus:outline-none focus:border-indigo-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              {submitting ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>
        )}
      </Container>
    </Layout>
  );
}
