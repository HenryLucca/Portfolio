import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import PresentationCard from "@/components/PresentationCard";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="scroll-smooth">
      {" "}
      {/* <--- this div */}
      <Navbar />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${playfairDisplay.className}`}
      >
        <PresentationCard />
        <div className="flex flex-col items-center justify-center">
          <a
            href="#about"
            className="text-2xl font-semibold mt-8 hover:text-gray-400"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-2xl font-semibold mt-8 hover:text-gray-400"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-2xl font-semibold mt-8 hover:text-gray-400"
          >
            Contact
          </a>
        </div>
      </main>
      <footer id="about">© 2023 Henry Lucca - Todos os direitos reservados.</footer>
    </div>
  );
}
