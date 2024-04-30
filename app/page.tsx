import Image from "next/image";
import Particles from "@/components/particles";
import React from "react";
import { IBM_Plex_Mono as IBM_Plex_MonoFont } from "next/font/google";

const IBM_Plex_Mono: ReturnType<typeof IBM_Plex_MonoFont> = IBM_Plex_MonoFont({
  weight: "300",
  display: "swap",
  subsets: ["latin-ext"],
});

export default function Home() {
  const navbarTransparent = true; // Replace 'true' with the actual value of navbarTransparent
  return (
    <main>
      <body className={IBM_Plex_Mono.className}>
        <div>
          <nav
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 transition-colors duration-300 ${
              navbarTransparent ? "bg-transparent" : "bg-white"
            }`}
          >
            <ul className="IBM_Plex_Mono_L">
              <li>
                <a href="#projects">Proyectos</a>
              </li>
              <li>
                <a href="#about">Quién soy</a>
              </li>
              <li>
                <a href="#contact">Contacto</a>
              </li>
              <li>
                <a href="#deploy">Deploy</a>
              </li>
            </ul>
          </nav>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r">
              <Particles
                className="absolute inset-0 -z-20 animate-fade-in"
                quantity={100}
              />
            </div>

            <div className="relative z-[-1] flex place-items-center ">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                src="/nifrizp.svg"
                alt="Next.js Logo"
                width={400}
                height={75}
                priority
              />
            </div>

            <div className="mb-3 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
              <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  Proyectos{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  Conoce los proyectos que he creado{" "}
                </p>
              </a>

              <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  Quién soy{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50"></p>
              </a>

              <a
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  Contacto{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  Contactame.
                </p>
              </a>

              <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  Deploy{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                  Instantly deploy your Next.js site to a shareable URL with
                  Vercel.
                </p>
              </a>
            </div>
          </main>
        </div>
      </body>
    </main>
  );
}
