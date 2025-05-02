'use client'

function SkillsSection() {
    return (
        <section className="w-full px-4 py-16 bg-slate-100 text-center">
            <h2 className="text-4xl font-bold mb-16">
                Skills & Technologies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Programming Languages */}
                <div className="bg-white shadow-md rounded-xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-red-500" />
                    <h3 className="text-lg font-semibold mb-4 capitalize">
                        Programming Languages
                    </h3>
                    <div className="grid grid-cols-3 gap-2 text-gray-700 text-sm">
                        <span>Python</span>
                        <span>C</span>
                        <span>C++</span>
                        <span>Java</span>
                        <span>JavaScript</span>
                        <span>TypeScript</span>
                        <span>R</span>
                        <span>Julia</span>
                        <span>Lua</span>
                        <span>Dart</span>
                        <span>Arduino</span>
                        <span>Assembly</span>
                    </div>
                </div>

                {/* Database */}
                <div className="bg-white shadow-md rounded-xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-red-500" />
                    <h3 className="text-lg font-semibold mb-4 capitalize">
                        Database
                    </h3>
                    <div className="grid grid-cols-3 gap-2 text-gray-700 text-sm">
                        <span>MySQL</span>
                        <span>PostgreSQL</span>
                        <span>SQLite</span>
                    </div>
                </div>

                {/* Skills and Technologies */}
                <div className="bg-white shadow-md rounded-xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-red-500" />
                    <h3 className="text-lg font-semibold mb-4 capitalize">Skills and Technologies</h3>
                    <div className="grid grid-cols-4 gap-2 text-gray-700 text-sm">
                        <span>Git</span>
                        <span>Docker</span>
                        <span>Numpy</span>
                        <span>Pandas</span>
                        <span>Jupyter</span>
                        <span>Django</span>
                        <span>NodeJS</span>
                        <span>NestJS</span>
                        <span>NextJS</span>
                        <span>React</span>
                        <span>Tailwind CSS</span>
                        <span>Bootstrap</span>
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>Flutter</span>
                        <span>Arduino</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillsSection;
