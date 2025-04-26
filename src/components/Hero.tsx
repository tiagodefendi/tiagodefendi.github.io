import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-gray-50 px-4 py-8 sm:px-6 sm:py-12 lg:py-16 xl:px-8 min-h-[calc(100dvh-64px)] flex items-center">
            <div className="mx-auto max-w-7xl w-full">
                <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-6">
                    <div className="order-2 lg:order-1 lg:max-w-[55%] xl:max-w-[600px] flex-shrink-0">
                        <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-[2.8rem] lg:leading-[1.1]">
                            <span className="block">I am</span>
                            <span className="text-red-500">Tiago Denfendi</span>
                            <span className="block mt-1 lg:mt-2">Full Stack Developer</span>
                        </h1>
                        
                        <p className="mt-4 text-base text-gray-600 sm:text-lg md:mt-6 md:max-w-[500px]">
                            Welcome to my portfolio! I'm a Computer Science student and passionate about technology, 
                            automation and problem-solving. Feel free to explore my projects and skills.
                        </p>

                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
                            <button className="w-full rounded-lg bg-red-500 px-5 py-2.5 font-semibold text-white transition hover:bg-red-600 sm:w-auto sm:px-6 sm:py-3">
                                Contact Me!
                            </button>
                            <button className="w-full rounded-lg bg-gray-200 px-5 py-2.5 font-semibold text-gray-700 transition hover:bg-gray-300 sm:w-auto sm:px-6 sm:py-3">
                                Download CV
                            </button>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 lg:flex-shrink-0">
                        <div className="relative mx-auto h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] lg:h-[400px] lg:w-[400px]">
                            <Image
                                src="/profile.png"
                                alt="Tiago Denfendi"
                                fill
                                className="object-contain"
                                priority
                                sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 400px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}