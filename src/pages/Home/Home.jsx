import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const background = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${"https://media.houseandgarden.co.uk/photos/6399de0ae0932254736e7830/3:2/w_2579,h_1719,c_limit/Mark%20Fox%20X%20Charlotte%20Boundy-44.jpg"})`,
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "71px 0px",
    height: "70vh",
  };

  const handleNavigate = () => {
    navigate("/About");
  };

  return (
    <div>
      <div className="banner" style={background}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div>
            <h1 className="text-white text-center">This is home page</h1>
            <div className="text-center">
              <button
                className="btn btn-secondary px-4 py-2"
                onClick={handleNavigate}
              >
                Go to About page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
