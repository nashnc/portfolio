import React from "react";
import soon from "./assets/soon.webp";
import ContactMini from "./elemts/ContactMini";
import Navbar from "./Navbar";
import Footer from "./elemts/Footer";
import TitlesS from "./elemts/TitlesSlash";
import MouseHover from "./MouseHover";


const contact = () => {
  return (
    <>
      <div className="fixed inset-0 z-[-2] bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      {/* Main content wrapper */}
      <div className="relative z-0"></div>
      <MouseHover />
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
