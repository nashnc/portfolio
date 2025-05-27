import React from "react";
const Skillset = () => {
  const skillsets = [
    {
      id: "languages",
      softUsed: ["JavaScript", "Node.js"],
      title: "Languages",
    },
    {
      id: "database",
      softUsed: ["MongoDB"],
      title: "Database",
    },
    {
      id: "tools",
      softUsed: ["VS Code", "Atom Editor", "Git", "GitHub", "Postman"],
      title: "Tools",
    },
    {
      id: "frameworks",
      softUsed: ["React.js", "Express.js", "TailwindCSS 4", "Bootstrap"],
      title: "Frameworks",
    },
    {
      id: "others",
      softUsed: ["HTML", "CSS", "EJS", "REST API", "Markdown"],
      title: "Others",
    },
  ];
  return (
    <div id="skillset">
      <div id="skillst" className="grid grid-cols-3 grid-rows-2 gap-2">
        {skillsets.map((skillset) => (
          <table id={skillset.id} className="">
            <div className="dark:border-2ndry-2 border-primary-2 border-2 p-2 text-center">
              <div className="border-b-1">
                <tr className="border-2ndry-2">
                  <th>{skillset.title}</th>
                </tr>
              </div>
              <div>
                <tr className="border-2ndry-2">
                  <td> {skillset.softUsed.join(", ")}</td>
                </tr>
              </div>
            </div>
          </table>
        ))}
      </div>
    </div>
  );
};

export default Skillset;
