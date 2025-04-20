"use client";
import { Timeline } from "@/components/ui/timeline";
import { TimelineEntry } from "@/types/timeline-entry";
import Image from "next/image";
import { Youtube } from "lucide-react";
import Stack from "@/components/ui/stack";

export default function Page() {
  const data: Array<TimelineEntry> = [
    {
      title: "2016",
      content: (
        <div className="text-center bg-white bg-opacity-90 dark:bg-gray-700 dark:bg-opacity-30 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Étudiant en DUT Génie Électrique et Informatique Industrielle à
            l&apos;Université de Neuville
          </h2>
          <h3 className="text-lg text-left pt-5 text-gray-800 dark:text-white">
            <span className="font-bold">Compétences acquises :</span>{" "}
            Informatique (langage C, programmation de microcontrôleurs),
            Électronique (réalisation de circuits électroniques, conception de
            systèmes embarqués), Sciences fondamentales (mathématiques,
            physique), Systèmes industriels (automatisme, réseaux)
          </h3>
          <p className="text-lg text-gray-700 dark:text-white text-justify pt-5">
            Cette formation m&apos;a permis de faire mes débuts en programmation
            et en électronique grâce à des travaux pratiques et des projets
            concrets, comme vous pouvez le voir dans les deux vidéos YouTube.
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
        <div className="text-center bg-white bg-opacity-90 dark:bg-gray-700 dark:bg-opacity-30 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Technicien simulateur de vol chez SIMAERO
          </h2>
          <h3 className="text-lg text-left pt-5 text-gray-800 dark:text-white">
            <span className="font-bold">Compétences acquises :</span>{" "}
            Maintenance, analyse, travail d&apos;équipe, communication avec les
            clients (instructeurs et pilotes) à l&apos;écrit et à l&apos;oral,
            en anglais ou en français
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
                SIMAERO est un centre de formation de pilotes.
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-700 dark:text-white">
            <span className="font-bold">Lieu :</span> Roissy-en-France, France
          </p>
          <p className="text-lg text-gray-700 dark:text-white text-justify pt-5">
            Je travaillais en 3x8, ce qui m&apos;a permis de découvrir le monde
            du travail et de m&apos;adapter à des horaires atypiques. J&apos;ai
            également appris à travailler en équipe et à communiquer avec des
            clients de manière professionnelle. J&apos;ai aussi appris à
            travailler sous pression et à respecter des délais serrés, notamment
            lors des maintenances curatives pour ne pas retarder les sessions,
            mais aussi lors des maintenances préventives pour éviter les pannes.
            J&apos;utilisais des lignes de commande pour démarrer, arrêter ou
            dépanner le simulateur, sous différents systèmes : SUN, IBM, Windows
            95, Indy.
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="text-center bg-white bg-opacity-90 dark:bg-gray-700 dark:bg-opacity-30 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Étudiant à l&apos;école 42
          </h2>
          <h3 className="text-lg text-left pt-5 text-gray-800 dark:text-white">
            <span className="font-bold">Compétences acquises :</span>{" "}
            Algorithmes, logique, structure de code, gestion de projet, gestion
            de version, programmation en C, orientée objet, système, réseau,
            développement de jeux vidéo
          </h3>
          <p className="text-lg text-gray-700 dark:text-white text-left pt-5">
            J&apos;ai redécouvert la programmation en C, sans passer par un IDE,
            mais uniquement via le terminal sous Linux. J&apos;ai appris à
            utiliser Linux comme environnement de développement. Grâce aux
            projets, j&apos;ai appris à travailler en équipe, à gérer des
            projets de A à Z, à utiliser Git, et à respecter des délais serrés.
            Nous avons également développé nos propres bibliothèques en C.
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="text-center bg-white bg-opacity-90 dark:bg-gray-700 dark:bg-opacity-30 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Découverte des technologies Web
          </h2>
          <h3 className="text-lg text-left pt-5 text-gray-800 dark:text-white">
            <span className="font-bold">Stack :</span>
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <Stack>Python</Stack>
            <Stack>JavaScript</Stack>
            <Stack>PostgreSQL</Stack>
            <Stack>Django</Stack>
            <Stack>API</Stack>
            <Stack>CSS</Stack>
            <Stack>HTML</Stack>
          </div>
          <p className="text-lg text-gray-700 dark:text-white text-left pt-5">
            Le dernier projet à l&apos;école 42 m&apos;a permis de découvrir le
            développement web avec Python et le framework Django. J&apos;ai
            appris à créer des interfaces utilisateur avec HTML, CSS et
            JavaScript pour le front-end, et à développer des routes API pour le
            back-end avec Django. J&apos;ai également appris à utiliser des
            bases de données relationnelles avec PostgreSQL et à écrire des
            requêtes SQL pour interagir avec ces bases.
          </p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="text-center bg-white bg-opacity-90 dark:bg-gray-700 dark:bg-opacity-30 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Stage : Développeur Recherche & Développement chez Free
          </h2>
          <h3 className="text-lg text-left pt-5 text-gray-800 dark:text-white">
            <span className="font-bold">Stack :</span>
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <Stack>Python</Stack>
            <Stack>TypeScript</Stack>
            <Stack>Vue.js</Stack>
            <Stack>Rust</Stack>
            <Stack>Playwright</Stack>
            <Stack>Docker</Stack>
            <Stack>Nuxt.js</Stack>
            <Stack>Next.js</Stack>
            <Stack>CI/CD</Stack>
          </div>
          <p className="text-lg text-gray-700 dark:text-white text-left pt-5">
            J&apos;ai travaillé dans un laboratoire de recherche et
            développement chez Free, afin de concevoir des outils internes pour
            assister les autres équipes. Voici les projets que j&apos;ai menés :
          </p>
          <ul className="list-disc list-inside text-left text-gray-700 dark:text-white">
            <li>
              <span className="font-bold">Avatar Generator :</span> Une API qui
              supprime le fond d&apos;une photo, le remplace par une couleur
              unie et ajoute un overlay conforme à la charte graphique de Free.
              J&apos;ai utilisé FastAPI.
            </li>
            <li>
              <span className="font-bold">No-code Tool Testing :</span> Un outil
              no-code permettant de réaliser des tests sur le site de Free en
              simulant des comportements humains. Outils : Playwright pour la
              navigation web, Cucumber JS avec la syntaxe Gherkin, Nuxt.js pour
              l&apos;application full-stack.
            </li>
            <li>
              <span className="font-bold">CMS en Rust :</span> Outil full-stack
              avec front-end en Vue.js et back-end en Rust. Utilisation de
              Monaco Editor pour l&apos;édition de code côté front, et de
              parties du code source de Deno pour interpréter le JS/TS, intégré
              via Vite.
            </li>
          </ul>
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
