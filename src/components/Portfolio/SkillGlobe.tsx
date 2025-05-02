'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const icons = [
    // programming language
    { src: '/skillsGlobe/languages/c.svg', alt: 'C' },
    { src: '/skillsGlobe/languages/cpp.svg', alt: 'C++' },
    { src: '/skillsGlobe/languages/python.svg', alt: 'Python' },
    { src: '/skillsGlobe/languages/java.svg', alt: 'Java' },
    { src: '/skillsGlobe/languages/javascript.svg', alt: 'JavaScript' },
    { src: '/skillsGlobe/languages/typescript.svg', alt: 'TypeScript' },
    { src: '/skillsGlobe/languages/julia.svg', alt: 'Julia' },
    { src: '/skillsGlobe/languages/lua.svg', alt: 'Lua' },
    { src: '/skillsGlobe/languages/r.svg', alt: 'R' },
    { src: '/skillsGlobe/languages/dart.svg', alt: 'Dart' },

    // database
    { src: '/skillsGlobe/database/mysql.svg', alt: 'MySQL' },
    { src: '/skillsGlobe/database/postgresql.svg', alt: 'PostgreSQL' },
    { src: '/skillsGlobe/database/sqlite.svg', alt: 'SQLite' },

    // skills
    { src: '/skillsGlobe/skills/git.svg', alt: 'Git' },
    { src: '/skillsGlobe/skills/docker.svg', alt: 'Docker' },
    { src: '/skillsGlobe/skills/arduino.svg', alt: 'Arduino' },
    { src: '/skillsGlobe/skills/numpy.svg', alt: 'Numpy' },
    { src: '/skillsGlobe/skills/pandas.svg', alt: 'Pandas' },
    { src: '/skillsGlobe/skills/jupyter.svg', alt: 'Jupyter' },
    { src: '/skillsGlobe/skills/django.svg', alt: 'Django' },
    { src: '/skillsGlobe/skills/flutter.svg', alt: 'Flutter' },
    { src: '/skillsGlobe/skills/html5.svg', alt: 'HTML5' },
    { src: '/skillsGlobe/skills/css3.svg', alt: 'CSS3' },
    { src: '/skillsGlobe/skills/nestjs.svg', alt: 'NestJS' },
    { src: '/skillsGlobe/skills/nextjs.svg', alt: 'NextJS' },
    { src: '/skillsGlobe/skills/nodejs.svg', alt: 'NodeJS' },
    { src: '/skillsGlobe/skills/react.svg', alt: 'React' },
    { src: '/skillsGlobe/skills/tailwindcss.svg', alt: 'Tailwind' },
    { src: '/skillsGlobe/skills/bootstrap.svg', alt: 'Bootstrap' },

    // os
    // { src: '/skillsGlobe/os/windows11.svg', alt: 'Windows' },
    // { src: '/skillsGlobe/os/linux.svg', alt: 'Linux' },
    // { src: '/skillsGlobe/os/android.svg', alt: 'Android' },

    // ides
    // { src: '/skillsGlobe/ide/vscode.svg', alt: 'VSCode' },
    // { src: '/skillsGlobe/ide/github.svg', alt: 'GitHub' },
    // { src: '/skillsGlobe/ide/postman.svg', alt: 'Postman' },
    // { src: '/skillsGlobe/ide/intellij.svg', alt: 'IntelliJ' },
    // { src: '/skillsGlobe/ide/pycharm.svg', alt: 'PyCharm' },
    // { src: '/skillsGlobe/ide/replit.svg', alt: 'Replit' },
    // { src: '/skillsGlobe/ide/rstudio.svg', alt: 'RStudio' },
    // { src: '/skillsGlobe/ide/androidstudio.svg', alt: 'Android Studio' },
]

function SkillsGlobe() {
    const containerRef = useRef<HTMLDivElement>(null)
    const outerContainerRef = useRef<HTMLDivElement>(null)
    const iconRefs = useRef<(HTMLDivElement | null)[]>([])
    const hoverStates = useRef<boolean[]>(new Array(icons.length).fill(false))
    const [selectedIcon, setSelectedIcon] = useState<number | null>(null)
    const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number } | null>(null)

    useEffect(() => {
        const container = containerRef.current
        const iconElements = iconRefs.current

        if (!container || iconElements.length === 0) return

        const GLOBE_SIZE = 400
        const ICON_SIZE = 40
        const RADIUS = GLOBE_SIZE / 2
        const CENTER = RADIUS
        const MAX_DISTANCE = RADIUS - ICON_SIZE / 2
        const SPEED = 0.8

        const positions = iconElements.map(() => {
            const angle = Math.random() * Math.PI * 2
            const radius = Math.sqrt(Math.random()) * MAX_DISTANCE
            return {
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius
            }
        })

        const velocities = iconElements.map(() => {
            const angle = Math.random() * Math.PI * 2
            return {
                x: Math.cos(angle) * SPEED,
                y: Math.sin(angle) * SPEED
            }
        })

        const animate = () => {
            iconElements.forEach((el, i) => {
                if (!el || hoverStates.current[i]) return

                positions[i].x += velocities[i].x
                positions[i].y += velocities[i].y

                const distance = Math.sqrt(positions[i].x ** 2 + positions[i].y ** 2)
                if (distance >= MAX_DISTANCE) {
                    const normX = positions[i].x / distance
                    const normY = positions[i].y / distance
                    const dot = velocities[i].x * normX + velocities[i].y * normY

                    velocities[i].x -= 2 * dot * normX
                    velocities[i].y -= 2 * dot * normY

                    positions[i].x = normX * MAX_DISTANCE
                    positions[i].y = normY * MAX_DISTANCE
                }

                el.style.transform = `translate(
                    ${CENTER + positions[i].x - ICON_SIZE / 2}px, 
                    ${CENTER + positions[i].y - ICON_SIZE / 2}px
                )`
            })

            requestAnimationFrame(animate)
        }

        animate()
    }, [])

    useEffect(() => {
        if (selectedIcon !== null) {
            const iconElement = iconRefs.current[selectedIcon]
            const outerContainer = outerContainerRef.current
            if (iconElement && outerContainer) {
                const iconRect = iconElement.getBoundingClientRect()
                const containerRect = outerContainer.getBoundingClientRect()
                const x = iconRect.left - containerRect.left + iconRect.width / 2
                const y = iconRect.top - containerRect.top - 10
                setTooltipPosition({ x, y })
            }
        } else {
            setTooltipPosition(null)
        }
    }, [selectedIcon])

    const handleIconHover = (index: number, isHovered: boolean) => {
        hoverStates.current[index] = isHovered
        setSelectedIcon(isHovered ? index : null)
    }

    return (
        <section className="w-full px-4 py-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
                <div className="flex-1 flex flex-col items-center">
                    <div className="relative w-[400px] h-[400px]" ref={outerContainerRef}>
                        <div
                            ref={containerRef}
                            className="relative w-full h-full bg-blue-100 rounded-full shadow-inner overflow-hidden"
                        >
                            {icons.map((icon, i) => (
                                <div
                                    key={i}
                                    ref={(el) => { iconRefs.current[i] = el }}
                                    className={`absolute transition-opacity duration-300 ease-linear group ${
                                        selectedIcon === i ? 'z-30' : 'z-20'
                                    }`}
                                    style={{ width: 40, height: 40 }}
                                    onMouseEnter={() => handleIconHover(i, true)}
                                    onMouseLeave={() => handleIconHover(i, false)}
                                >
                                    <div className="relative">
                                        <Image
                                            src={icon.src}
                                            alt={icon.alt}
                                            width={40}
                                            height={40}
                                            className={`opacity-80 transition-all duration-300 ${
                                                selectedIcon === i
                                                    ? 'opacity-100 scale-110'
                                                    : 'hover:opacity-100'
                                            }`}
                                        />
                                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br 
                                            from-yellow-200/30 to-transparent blur-[20px] transition-opacity 
                                            duration-300 ${selectedIcon === i ? 'opacity-100' : 'opacity-0'}`}
                                        />
                                    </div>
                                </div>
                            ))}

                            <div className="absolute inset-0 rounded-full pointer-events-none shadow-[inset_0_0_30px_rgba(255,255,255,0.3)] backdrop-blur-[2px] border-[6px] border-white/20 z-10">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent mix-blend-overlay" />
                            </div>
                        </div>

                        {selectedIcon !== null && tooltipPosition && (
                            <div
                                className="absolute bg-gray-800 text-white px-3 py-2 rounded-md text-sm shadow-lg transition-all z-50"
                                style={{
                                    left: `${tooltipPosition.x}px`,
                                    top: `${tooltipPosition.y}px`,
                                    transform: 'translate(-50%, -125%)',
                                }}
                            >
                                {icons[selectedIcon].alt}
                                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-2 h-2 bg-gray-800 transform rotate-45 translate-y-1/2" />
                            </div>
                        )}

                        <div className="absolute inset-0 rounded-full pointer-events-none shadow-[0_0_40px_15px_rgba(173,216,230,0.4)] z-0" />
                    </div>

                    <div className="relative mx-auto w-[300px] -mt-2">
                        <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-[20px] h-[50px] 
                            bg-gradient-to-b from-yellow-800 via-yellow-700 to-yellow-900 
                            rounded-t-lg shadow-[inset_0_-3px_6px_rgba(0,0,0,0.2)]">
                            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 
                                rounded-full bg-yellow-600 shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)]" />
                        </div>

                        <div className="relative bg-gradient-to-br from-yellow-800 to-yellow-900 
                            h-[60px] rounded-lg shadow-lg overflow-hidden
                            before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] before:opacity-30">

                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white font-bold italic text-lg tracking-wide 
                                    drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                                    MY SKILL GLOBE
                                </span>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 h-2 bg-yellow-700/50 
                                shadow-[inset_0_2px_4px_rgba(255,255,255,0.2)]" />
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex items-center p-6">
                    <div className="max-w-md mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Featured Technologies
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            This interactive globe showcases my core technical skills.
                            Each icon represents a technology I've mastered and used in
                            real-world projects. Observe how they move harmoniously, symbolizing
                            the integration between different tools in modern development.
                            Hover over the icons to view details and click to explore
                            related projects for each technology.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillsGlobe
