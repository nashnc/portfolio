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
        <div className="skillLogo">
          <img src={mongologo} alt="MongoDB" className="" />
        </div>
        <div className="skillLogo">
          <img src={expresslogo} alt="Express" className="" />
        </div>
        <div className="skillLogo">
          <img src={reactlogo} alt="React" className=" " />
        </div>
        <div className="skillLogo">
          <img src={nodelogo} alt="Node.js" className="" />
        </div>
        <div className="skillLogo">
          <img src={postmanlogo} alt="Postman" className="" />
        </div>
        <div className="skillLogo">
          <img src={tailwindlogo} alt="Tailwind CSS" className="" />
        </div>
      </div>
    </>
  );
};

export default SkillsFront;
