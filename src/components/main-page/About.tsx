import Image from "next/image";
import img from "../../../public/about_photo.jpg"

export default function About(){
    return (
        <section id="about" className="mt-6">
            <h2 className="text-3xl font-semibold text-center mb-12">About Me</h2>
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="flex flex-col items-center md:items-start">
                    <p className="text-xl font-semibold text-center md:text-left mb-4">
                        Hi, my name is Henry Lucca, I'm 21 years old and i'm a brazilian developer.
                    </p>
                    <p className="text-xl font-semibold text-center md:text-left mb-4">
                        I'm currently studying to become a fullstack web developer, but i'm also interested in becoming a mobile developer.
                    </p>
                    <p className="text-xl font-semibold text-center md:text-left mb-4">
                        I'm an energetic person always looking for new challenges and knowledge.
                    </p>
                    <p className="text-xl font-semibold text-center md:text-left mb-4">
                        I'm currently studying at the Catholic University of Pernambuco (UNICAP) and i'm in the 7th period of the Computer Science course.
                    </p>
                    <p className="text-xl font-semibold text-center md:text-left mb-4">
                        More personally about me, when i'm not programming i'm probably playing games, watching football or basketball ☘, or at the gym 💪 .
                    </p>
                    
                </div>
                <div className="flex flex-col items-center md:items-end">
                    <Image src="/about_photo.jpg" alt="Foto de Henry Lucca" width={300} height={300} className="rounded-full w-72 h-72 object-cover" />
                    <p className="text-xl font-semibold text-center md:text-right mt-4">
                        Henry Lucca
                    </p>
                </div>
            </div>
                    
        </section>
    )
}