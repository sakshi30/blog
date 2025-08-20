import { Code } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import { skills } from "../data/data";

function Skills() {
  const { skill } = skills;
  return (
    <div className="animate-fadeIn">
      <SectionTitle icon={Code} title="Technical Skills" />
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="space-y-3">
            {skill.map((skill) => (
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">{skill.tech}</span>
                  <span className="text-blue-500">{skill.profiency}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-2 bg-blue-700 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.profiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
