import Image from "next/image";

export default function PresentationCard() {
  return (
    <section
      className={`
          flex flex-col sm:flex-row items-center justify-center gap-4
          bg-zinc-100 dark:bg-zinc-700
          py-8 px-16 sm:p-16 rounded-md  
        `}
    >
      <Image
        src="/profile.jpg"
        alt="Henry Lucca"
        width={144}
        height={144}
        className={`rounded-full border-4 border-zinc-50 
          w-36 h-36 md:max-w-48 md:h-48
        `}
      />

      <div className="flex flex-col items-center justify-center gap-5">
        <p className="flex flex-col md:flex-row items-baseline justify-center gap-2 text-xl font-bold">
          <span>Hi there! I'm</span>
          <span className="text-4xl md:ml-2">Henry Lucca 🥳</span>
          {/* <span>🥳</span> */}
        </p>

        <p className="text-lg sm:text-2xl w-12/12 sm:w-9/12 text-center">
          I'm an idea developer who wants to build a better world through
          software focused on web development.
        </p>
      </div>
    </section>
  );
}
