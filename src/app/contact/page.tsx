"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      object: formData.get("object"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://api.obouhlel.xyz/contact-me", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Message envoyé avec succès!",
        });
      } else {
        setSubmitStatus({
          success: false,
          message: "Erreur lors de l'envoi du message.",
        });
      }
    } catch {
      setSubmitStatus({
        success: false,
        message: "Problème de connexion au serveur.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen px-4">
        <div className="text-5xl font-bold text-white text-center mb-8">
          Me contacter
        </div>
        {submitStatus && (
          <div
            className={`mb-4 p-3 rounded-md w-full max-w-md text-center ${
              submitStatus.success ? "bg-green-700/60" : "bg-red-700/60"
            }`}
          >
            {submitStatus.message}
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-md z-10"
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Nom</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Votre nom"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Votre email"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="object">Objets</Label>
            <Input
              id="object"
              name="object"
              type="text"
              placeholder="Objet de votre message"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              name="message"
              placeholder="Votre message"
              required
              className="shadow-input dark:placeholder-text-neutral-600 flex h-32 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-white transition duration-400 placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-black dark:text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:opacity-70"
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      </div>
    </>
  );
}
