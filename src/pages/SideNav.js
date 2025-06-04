import { useActiveSection } from "../context/ActiveSection";
function SideNav() {
  const { NavItem, sections } = useActiveSection();

  return (
    <nav className="w-64 space-y-2 bg-gray-800/70 p-4 rounded-lg backdrop-blur-lg shadow-xl animate-slideInLeft">
      {sections.map((section, index) => (
        <NavItem
          id={section.id}
          icon={section.icon}
          text={section.text}
          index={index}
          key={section.id}
        />
      ))}
    </nav>
  );
}

export default SideNav;
