import React from "react";
import soon from "./assets/soon.png";
import ContactMini from "./elemts/ContactMini";
import Navbar from "./Navbar";
import Footer from "./elemts/Footer";
import TitlesS from "./elemts/TitlesSlash";


const contact = () => {
  return (
    <>
      <Navbar />
      <div className="mycontainer pb-10">
        <TitlesS htitle="contact" />
        <div className="">
          <div className="">
            <ContactMini htitle="contact" />
          </div>
        </div>
        &nbsp;
        <hr />
        <br />
        <Footer />
      </div>
      &nbsp;
      <br />
      &nbsp;
    </>
  );
};

export default contact;
