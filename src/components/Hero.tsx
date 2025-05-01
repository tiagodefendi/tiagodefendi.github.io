import { Toaster } from "react-hot-toast";
import ContactButton from "./Buttons/ContactButton";
import CVButton from "./Buttons/CVButton";
import Image from "next/image";
import HeroImage from "../../public/hero.png";

function Hero() {
    return (
        <section className="relative overflow-hidden py-12">
            <div className="container mx-auto px-4">
                <article className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                    <div className="space-y-6 px-6 lg:px-0 max-w-xl">
                        <header className="space-y-2">
                            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                                I am <span className="text-red-500">Tiago Defendi</span> <br />
                                I'm a Full Stack Developer
                            </h1>
                            <p className="text-sm lg:text-base text-gray-700">
                                Welcome to my portfolio! I'm a Computer Science student and passionate about technology, automation, and problem-solving.
                                Feel free to explore my projects and skills.
                            </p>
                        </header>

                        <div className="flex flex-wrap gap-4">
                            <ContactButton className="bg-red-500 hover:bg-red-700 px-5 py-4 rounded-md text-white text-sm font-semibold" />
                            <CVButton className="bg-slate-200 hover:bg-slate-300 hover:text-red-500 px-5 py-4 rounded-md text-sm font-semibold" />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <Image
                            src={HeroImage}
                            alt="My Self-portrait"
                            sizes="(max-width: 768px) 0vw, 50vw"
                            quality={100}
                            priority
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </article>
            </div>

            <Toaster position="top-center" reverseOrder={false} />
        </section>
    );
}

export default Hero;
