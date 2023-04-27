import React from "react";
import ContactInfo from "./ContactInfo";
import Project from "./Project";
import Instagram from "./Instagram";
import Follow from "./Follow";

const Footer = () => {
  return (
    <footer className="py-5 bg-black">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-12 px-lg-4">
            <ContactInfo />
          </div>
          <div className="col-lg-3 col-md-4 col-12 px-lg-4">
            <Project />
          </div>
          <div className="col-lg-3 col-md-4 col-12 px-lg-4">
            <Instagram />
          </div>
          <div className="col-lg-3 col-md-4 col-12 px-lg-4">
            <Follow />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
