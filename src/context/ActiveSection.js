import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { Briefcase, Code, GraduationCap, Projector, User2 } from "lucide-react";
const ActiveContext = createContext();
const sections = [
  { id: "about", icon: User2, text: "About Me" },
  { id: "experience", icon: Briefcase, text: "Experience" },
  { id: "skills", icon: Code, text: "Skills" },
  { id: "education", icon: GraduationCap, text: "Education" },
  { id: "projects", icon: Projector, text: "Projects" },
];
function ActiveSection({ children }) {
  const [activeSection, setActiveSection] = useState("about");
  const [index, setIndex] = useState(0);
  const sectionRefs = useRef({});

  const handleClick = useCallback((id, clickedIndex) => {
    setActiveSection(id);
    setIndex(clickedIndex);
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  const goNext = useCallback(() => {
    if (index < sections.length - 1) {
      const nextIndex = index + 1;
      setIndex(nextIndex);
      setActiveSection(sections[nextIndex].id);
      sectionRefs.current[sections[nextIndex].id]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [index]);

  const goPrev = useCallback(() => {
    if (index > 0) {
      const prevIndex = index - 1;
      setIndex(prevIndex);
      setActiveSection(sections[prevIndex].id);
      sectionRefs.current[sections[prevIndex].id]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [index]);

  const NavItem = ({ id, icon: Icon, text, index }) => (
    <button
      onClick={() => handleClick(id, index)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
        activeSection === id
          ? "bg-blue-900 text-white shadow-lg"
          : "text-white/90 hover:bg-blue-900/50"
      }`}
    >
      <Icon size={18} />
      <span>{text}</span>
    </button>
  );

  return (
    <ActiveContext.Provider
      value={{
        NavItem,
        activeSection,
        sectionRefs,
        index,
        goNext,
        sections,
        goPrev,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
}

const useActiveSection = () => useContext(ActiveContext);

export { ActiveSection, useActiveSection };
