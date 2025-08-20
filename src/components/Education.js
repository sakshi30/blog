import { GraduationCap } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import { education } from "../data/data";

function Education() {
  const { institutions } = education;
  return (
    <div className="animate-fadeIn">
      <SectionTitle icon={GraduationCap} title="Education" />
      <div className="border-l-2 border-blue-500 pl-4 hover:pl-6 transition-all duration-300">
        {institutions.map((institution) => {
          const { degree, college, year } = institution;
          return (
            <div key={college}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {degree}
                  </h3>
                  <p className="text-gray-600">{college}</p>
                </div>
                <span className="text-sm text-blue-500 font-medium">
                  {year}
                </span>
              </div>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
