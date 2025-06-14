import React from "react";
import Hero2 from "../Hero/Hero2";
import Treatment from "../Hero/Treatment/Treatment";
import Client from "../Hero/Client/Client";

const About = () => {
  return (
    <div>
      <div>
        <Hero2></Hero2>
      </div>
      <div>
        <Treatment></Treatment>
      </div>
      <div className="m-20">
        <Client></Client>
      </div>
    </div>
  );
};

export default About;
