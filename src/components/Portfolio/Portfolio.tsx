import ProjectsCarousel from "./ProjectsCarousel";
import SkillsGlobe from "./SkillGlobe";
import SkillsSection from "./SkillsSection";

function Portfolio() {
    return (
        <section>
            <SkillsSection />
            <SkillsGlobe />
            <ProjectsCarousel />
        </section>
    )
}

export default Portfolio;
