import React from "react";
import { BsChevronCompactDown } from "react-icons/bs";

const OurTeam = () => {
  const teamImage = [
    "https://i.ibb.co/PZsKTbX/jon-500x500.jpg",
    "https://i.ibb.co/hDG9Mbt/5-B8-A0498-CROP-500x500.jpg",
    "https://i.ibb.co/GCsntqF/5-B8-A0426-CROP-500x500.jpg",
    "https://i.ibb.co/KyRRdJP/5-B8-A0361-CROP-500x500.jpg",
    "https://i.ibb.co/NSDBzN7/Samantha-headshot-02-500x500.jpg",
  ];

  return (
    <div className="mt-4 pt-lg-4">
      <h1 className="footer-title fs-1 mb-3  text-secondary">OUR TEAM</h1>
      <div className="d-lg-flex align-items-center">
        {teamImage.map((item) => (
          <div className="team-container">
            <img src={item} className="img-fluid hover-img" alt="" />
            <div class="team-overlay w-75 h-75 d-flex justify-content-center align-items-center mx-auto">
              <div class="">
                <div className="">
                  <p className="text-center text-white m-0">
                    Business Strategy and Sales
                  </p>
                  <p className="text-center text-white m-0">Stacie Oliver</p>
                  <div className="text-center mt-2">
                    <BsChevronCompactDown className="text-white opacity-50 fs-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
