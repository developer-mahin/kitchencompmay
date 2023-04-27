import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Instagram = () => {
  const projectData = [
    "https://i.ibb.co/jMLp6P5/01-4-24-19-040-66x66.jpg",
    "https://i.ibb.co/KGyTV0T/195663404-3003706206571507-6439861230423412698-n.jpg",
    "https://i.ibb.co/jMLp6P5/01-4-24-19-040-66x66.jpg",
    "https://i.ibb.co/qm0pJCb/193150281-4292415124103143-7521492984510869555-n.jpg",
    "https://i.ibb.co/gW2x7MG/191735054-3789671507797641-6730918206749632624-n.jpg",
    "https://i.ibb.co/6P5f029/web-size-Bridgewater-20-66x66.jpg",
    "https://i.ibb.co/KGyTV0T/195663404-3003706206571507-6439861230423412698-n.jpg",
    "https://i.ibb.co/qm0pJCb/193150281-4292415124103143-7521492984510869555-n.jpg",
    "https://i.ibb.co/6P5f029/web-size-Bridgewater-20-66x66.jpg",
    "https://i.ibb.co/dGLHHPt/01-4-24-19-093-66x66.jpg",
    "https://i.ibb.co/jMLp6P5/01-4-24-19-040-66x66.jpg",
    "https://i.ibb.co/6P5f029/web-size-Bridgewater-20-66x66.jpg",
  ];

  return (
    <div>
      <h5 className="text-white opacity-75 footer-title">
        RECENT INSTAGRAM POSTS
      </h5>
      <div className="mt-4">
        <div className="row">
          {projectData.map((img, i) => (
            <div className="col-4 my-1 p-0 ">
              <div className="instagram-container">
                <img className="img-fluid hover-img" src={img} alt="" key={i} />
                <div class="overlay">
                  <div class="position-relative">
                    <div className="position-absolute instagram-positioning">
                      <AiOutlineInstagram className="text-white opacity-50 " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center align-items-center  mt-4">
          <button className="d-flex justify-content-center align-items-center gap-2 btn btn-primary px-3 py-2">
            <BsInstagram className="text-white" />
            <span>View on instagram</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
