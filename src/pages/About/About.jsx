import React from "react";
import OurStory from "./OurStory";
import OurTeam from "./OurTeam";

const About = () => {
  return (
    <div className="pt-4">
      <div className="container mx-auto">
        <OurStory />
        <OurTeam />
      </div>
    </div>
  );
};

export default About;
