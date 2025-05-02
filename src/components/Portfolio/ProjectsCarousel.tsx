'use client'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const projects = [
    {
        title: 'Personal Portfolio',
        description: 'Modern developer portfolio showcasing technical skills and projects with Next.js',
        image: '/projectsCarousel/website.png',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
        link: 'https://tiagodefendi.com',
        github: 'https://github.com/tiagodefendi/tiagodefendi.github.io'
    },
    {
        title: 'CrazyIdeas',
        description: 'Craziest Minecraft mod ever made, here I\'m exploring Java capabilities, implementing custom gameplay features, and experimental mechanics',
        image: '/projectsCarousel/crazyideas.png',
        tech: ['Java', 'JDK 17', 'Minecraft', 'Forge', 'Mod Development'],
        link: '#',
        github: 'https://github.com/tiagodefendi/CrazyIdeas'
    },
    {
        title: 'Lucy',
        description: 'Custom Discord bot featuring AI-powered utilities for server management, entertainment, and community engagement',
        image: '/projectsCarousel/lucy.png',
        tech: ['Python', 'Discord API', 'AI Integration', 'Automation'],
        link: 'https://discord.com/oauth2/authorize?client_id=891407921957720094&scope=bot%20applications.commands&permissions=8',
        github: 'https://github.com/tiagodefendi/Lucy'
    },
    {
        title: 'Hydro Cultiva Connect',
        description: 'Comprehensive irrigation management system optimizing water usage for agricultural sustainability and productivity',
        image: '/projectsCarousel/hydro-cultiva.png',
        tech: [
            'Python', 
            'Django', 
            'Django REST Framework', 
            'Django Q', 
            'MySQL', 
            'Bootstrap', 
            'Leaflet.js'
        ],
        link: '#',
        github: 'https://github.com/tiagodefendi/Hydro-Cultiva-Connect'
    }
];

function ProjectsCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])
    const [selectedIndex, setSelectedIndex] = useState(0)

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap())
        }

        emblaApi.on('select', onSelect)
        return () => {
            emblaApi.off('select', onSelect)
        }
    }, [emblaApi])

    return (
        <section className="py-16 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    Featured Projects
                </h2>

                <div className="embla relative overflow-hidden" ref={emblaRef}>
                    <div className="embla__container flex">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="embla__slide flex-[0_0_100%] min-w-0 px-4"
                            >
                                <div className="grid md:grid-cols-2 gap-8 p-6 bg-white rounded-xl shadow-lg">
                                    <div className="relative h-96 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    <div className="flex flex-col justify-center">
                                        <h3 className="text-3xl font-bold mb-4 text-gray-800">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6">{project.description}</p>
                                        
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tech.map((tech, i) => (
                                                <span 
                                                    key={i}
                                                    className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-4">
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-5 py-4 bg-red-500 text-white rounded-lg hover:bg-red-700 transition-colors"
                                            >
                                                Live Demo
                                            </a>
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-5 py-4 border-2 bg-slate-200 border-slate-200 text-gray-700 rounded-lg hover:border-red-500 hover:text-red-500 transition-all"
                                            >
                                                View Code
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={scrollPrev}
                        className="embla__prev absolute top-1/2 -translate-y-1/2 left-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={scrollNext}
                        className="embla__next absolute top-1/2 -translate-y-1/2 right-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-8">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => emblaApi && emblaApi.scrollTo(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === selectedIndex 
                                    ? 'bg-red-500' 
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsCarousel