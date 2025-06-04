import About from "../components/About";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import { useActiveSection } from "../context/ActiveSection";

function MainContent() {
  const { activeSection, sectionRefs } = useActiveSection();

  return (
    <section
      key={activeSection} // Force re-render when section changes
      className={`flex-1 w-full bg-white/95 backdrop-blur-lg rounded-lg shadow-lg p-6`}
    >
      {activeSection === "about" && (
        <div ref={(el) => (sectionRefs.current["about"] = el)}>
          <About />
        </div>
      )}

      {activeSection === "experience" && (
        <div ref={(el) => (sectionRefs.current["experience"] = el)}>
          <Experience />
        </div>
      )}

      {activeSection === "skills" && (
        <div ref={(el) => (sectionRefs.current["skills"] = el)}>
          <Skills />
        </div>
      )}

      {activeSection === "education" && (
        <div ref={(el) => (sectionRefs.current["education"] = el)}>
          <Education />
        </div>
      )}

      {activeSection === "projects" && (
        <div ref={(el) => (sectionRefs.current["projects"] = el)}>
          <Projects />
        </div>
      )}
    </section>
  );
}

export default MainContent;
