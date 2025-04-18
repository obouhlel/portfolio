"use client";
import { Timeline } from "@/components/ui/timeline";
import { TimelineEntry } from "@/types/timeline-entry";
import Image from "next/image";
import { Youtube } from "lucide-react";

export default function Page() {
  const data: Array<TimelineEntry> = [
    {
      title: "2016",
      content: (
        <div className="text-center">
          <h2 className="text-2xl font-bold">
            Etudiant en DUT Génie Electrique et Informatique Industrielle, A
            Neuville Université
          </h2>
          <h3 className="text-lg text-left pt-5">
            <span className="font-bold">Compétances acquises :</span>
            Informatique (Langage C, Programmation de microcontrôleurs),
            Électronique (Confection de circuits électroniques, Conception de
            systèmes embarqués), Sciences fondamentales (Mathématiques,
            Physique), Systèmes industriels (Automatisme, Réseaux)
          </h3>
          <p className="text-lg text-white text-justify pt-5">
            Cette formation m&apos;a permit de faire mes debuts dans la
            programmation et l&apos;électronique avec des travaux pratrique, ou
            des travaux de réalisation, comme vous pouvez le voir dans les deux
            vidéo youtube.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="https://youtu.be/7Uu09wtxTUk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition"
            >
              <Youtube className="mr-2" /> Projet 1
            </a>
            <a
              href="https://youtu.be/6MhIAvM-TTs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition"
            >
              <Youtube className="mr-2" /> Projet 2
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div className="text-center">
          <h2 className="text-2xl font-bold">
            Technicien de simulateur de vol chez SIMAERO
          </h2>
          <h3 className="text-lg text-left pt-5">
            <span className="font-bold">Compétance acquise :</span> Maintenance,
            Analyse, Travail d&apos;équipe, Communication avec les clients
            (instructeurs et pilotes) a l&apos;ecrit et a l&apos;oral en anglais
            ou francais
          </h3>
          <div className="mt-4 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mx-auto max-w-md">
            <Image
              src="/images/SIMAERO.webp"
              alt="SIMAERO"
              width={300}
              height={200}
              className="w-full object-cover"
            />
            <div className="p-4">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                SIMAERO est un centre de formation de pilotes
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            <span className="font-bold">Lieu :</span> Roissy-en-France, France
          </p>
          <p className="text-lg text-white text-justify pt-5">
            Je travaillais en 3*8, ce qui m&apos;a permis de découvrir le monde
            du travail et de m&apos;adapter à des horaires atypiques. J&apos;ai
            également appris à travailler en équipe et à communiquer avec des
            clients de manière professionnelle. J&apos;ai aussi appris à
            travailler sous pression et à respecter des délais serrés, notamment
            pendant les maintenances curatives pour ne pas retarder les sessions
            des clients, mais aussi de la maintenance préventive pour éviter les
            pannes. J&apos;ai utilisé des lignes de commandes pour démarrer,
            arrêter ou dépanner le simulateur, sous des systèmes SUN, IBM,
            Windows 95, Indy.
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="text-center">
          <h2 className="text-2xl font-bold">Etudiant à l&apos;école 42</h2>
          <h3 className="text-lg text-left pt-5">
            <span className="font-bold">Compétance acquise :</span> Algorythmes,
            Programmation en C, Programmation orientée objet, Programmation
            système, Programmation réseau, Programmation web, Programmation de
            jeux vidéo
          </h3>
        </div>
      ),
    },
  ];

  return (
    <>
      <Timeline data={data} />
    </>
  );
}
