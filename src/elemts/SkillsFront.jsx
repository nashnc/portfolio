import React from "react";

import mongologo from "./Images/mognologo.png";
import expresslogo from "./Images/expresslogo.png";
import reactlogo from "./Images/reactlogo.svg";
import nodelogo from "./Images/nodelogo.png";
import postmanlogo from "./Images/postmanlogo.png";
import tailwindlogo from "./Images/tailwindlogo.png";

const SkillsFront = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-3">
        <div className="skillItem">
          <img src={mongologo} alt="MongoDB" className="skillLogo" />
        </div>
        <div className="skillItem">
          <img src={expresslogo} alt="Express" className="skillLogo" />
        </div>
        <div className="skillItem">
          <img src={reactlogo} alt="React" className="skillLogo" />
        </div>
        <div className="skillItem">
          <img src={nodelogo} alt="Node.js" className="skillLogo" />
        </div>
        <div className="skillItem">
          <img src={postmanlogo} alt="Postman" className="skillLogo" />
        </div>
        <div className="skillItem">
          <img src={tailwindlogo} alt="Tailwind CSS" className="skillLogo" />
        </div>
      </div>
    </>
  );
};

export default SkillsFront;
