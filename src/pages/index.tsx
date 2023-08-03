import { Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import ThemeButton from "@/components/ThemeButton";
import MainPageContent from "@/components/main-page/MainPageContent";
import { LanguageSwitch } from "@/components/LanguageSwitch";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  const [theme, setTheme] = useState(""); // empty string = light theme, 'dark' = dark theme

  return (
    <div className={`${theme} scroll-smooth ${playfairDisplay.className}`}>
      <div
        className={`bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100`}
      >
        <Navbar />

        <MainPageContent />

        <div className="fixed bottom-4 right-4 p-2 flex flex-col items-end">
          <LanguageSwitch />
          <ThemeButton theme={theme} setTheme={setTheme} />
        </div>

        <footer className="flex justify-center items-center">
          <p>© 2023 Henry Lucca - Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
}
