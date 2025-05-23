import React from "react";
import soon from "./assets/soon.png";
import ContactMini from "./elemts/ContactMini";
import Navbar from "./Navbar";

const contact = () => {
  return (
    <>
      <Navbar />
      <div className="mycontainer pb-10">
        <h1 className="head1 pb-3">
          <span className="text-hilit-1">/</span>contact
        </h1>
        <div className="">
          <p>
            I am looking forward to work in your company feel free to contact
            me{" "}
          </p>
          <div className="">
            <ContactMini htitle="contact" />
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
