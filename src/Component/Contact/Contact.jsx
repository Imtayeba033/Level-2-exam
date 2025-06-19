import React from "react";
import Team from "../Hero/Team/Team";

const Contact = () => {
  return (
    <div>
      <div>
        <div className="mt-10">
          <div className="flex justify-center gap-7 items-center text-center ">
            <div className="leading-6 text-black mt-16">
              <h1 className="text-5xl md:text-7xl font-semibold">
                Contact Our
                <span className="text-accent"> Team</span>
              </h1>
              <br></br>
              <p className="text-xl text-gray-700">
                We're here to help you start your wellness journey.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Team></Team>
      </div>
    </div>
  );
};

export default Contact;
