import { MoonIcon, SunIcon } from "@/icons/icons";

interface ThemeButtonProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export default function ThemeButton(props: ThemeButtonProps) {
  return (
    <button
      onClick={() => props.setTheme(props.theme === "" ? "dark" : "")}
      className="rounded-md bg-zinc-100 dark:bg-zinc-700"
    >
      {props.theme === "" ? <MoonIcon size={6} /> : <SunIcon size={6} />}
    </button>
  );
}
