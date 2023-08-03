import PresentationCard from "./PresentationCard";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

export default function MainPageContent() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-normal py-12 px-24 w-screen gap-8 bg-zinc-50 dark:bg-zinc-800`}
    >
      <PresentationCard />
      
      <div className="mt-12">
        <div className="w-6 h-6 border-b border-l border-zinc-800 dark:border-zinc-50 transform -rotate-45 animate-bounce-slow"></div>
        <div className="w-6 h-6 border-b border-l border-zinc-800 dark:border-zinc-50 transform -rotate-45 animate-bounce-slow"></div>
      </div>

      <Skills />
      <About />
      <Projects />
      
    </main>
  );
}
