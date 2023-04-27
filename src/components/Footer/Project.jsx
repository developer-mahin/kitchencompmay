import React from "react";

const Project = () => {
  const projectData = [
    "https://i.ibb.co/BgPTgSp/Ali-45-66x66.jpg",
    "https://i.ibb.co/CsWQ0vX/web-size-Kelly-03-1-66x66.jpg",
    "https://i.ibb.co/rHhCFLc/web-size-Oliver-21-66x66.jpg",
    "https://i.ibb.co/BB7hrxK/web-size-Oliver-07-66x66.jpg",
    "https://i.ibb.co/Y3md7ct/01-5-06-19-76-66x66.jpg",
    "https://i.ibb.co/vmjBb5V/01-5-06-19-35-66x66.jpg",
    "https://i.ibb.co/8MtJcQV/01-5-06-19-64-66x66.jpg",
    "https://i.ibb.co/0D1BfFr/Barker-11-66x66.jpg",
    "https://i.ibb.co/jVcXTyd/Wilson-01-websize-66x66.jpg",
    "https://i.ibb.co/dGLHHPt/01-4-24-19-093-66x66.jpg",
    "https://i.ibb.co/jMLp6P5/01-4-24-19-040-66x66.jpg",
    "https://i.ibb.co/6P5f029/web-size-Bridgewater-20-66x66.jpg",
  ];

  return (
    <div className="px-2 px-lg-0">
      <h5 className="text-white opacity-75 footer-title">RECENT PROJECTS</h5>
      <div className="mt-4">
        <div className="row">
          {projectData.map((img, i) => (
            <div className="col-3 my-1 p-0 ">
              <div className="img-container">
                <img className="img-fluid hover-img" src={img} alt="" key={i} />
                <div class="overlay">
                  <div class="text"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
