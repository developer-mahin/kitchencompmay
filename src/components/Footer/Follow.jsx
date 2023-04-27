import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Follow = () => {
  return (
    <div> 
      <h5 className="text-white opacity-75 footer-title">FOLLOW US</h5>
      <div className="mt-4">
        <div className="d-flex align-items-center gap-3">
          <div className="icon-container facebook">
            <FaFacebookF className="text-white"/>
          </div>
          <div className="icon-container instagram">
            <BsInstagram className="text-white"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Follow;
