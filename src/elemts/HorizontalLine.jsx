import React from "react";
import "./HorizontalLine.css";
const HorizontalLine = () => {
  return (
    <>
      <div className="">
        <div className="bg-hilit-1 relative h-1 sm:w-auto">
          <div className="line1 dark:bg-primary bg-2ndry-1 absolute h-1 w-2"></div>
          <div className="line2 dark:bg-primary bg-2ndry-1 absolute h-1 w-1"></div>
        </div>
      </div>
    </>
  );
};

export default HorizontalLine;
