import React from "react";
import HorizontalLine from "./HorizontalLine";

const Titles = ({ htitle }) => {
  return (
    <>
      <h2 className="head2">
        <span className="text-hilit-1">#</span>
        {htitle}
      </h2>
      {htitle.toLowerCase() === "contact" ? null : (
        <div className="pt-4 sm:col-span-1 md:col-span-3">
          <HorizontalLine />
        </div>
      )}
    </>
  );
};

export default Titles;
