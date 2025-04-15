"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center mb-8">
          Me contacter
        </div>
        <form
          method="POST"
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
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              name="message"
              placeholder="Votre message"
              required
              className="shadow-input dark:placeholder-text-neutral-600 flex h-32 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600"
            />
          </div>
          <button
            type="submit"
            className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white font-medium hover:bg-blue-600 transition"
          >
            Envoyer
          </button>
        </form>
        <BackgroundBeams />
      </div>
    </>
  );
}
