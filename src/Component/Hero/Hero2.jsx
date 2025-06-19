import React from "react";

const Hero2 = () => {
  return (
    <div className="px-5 md:px-20 md:py-32 mt-4 ">
      <div className="md:flex justify-center gap-14 items-center">
        <div className="rounded-3xl">
          <img src="/src/assets/image 1.png" alt="" />
        </div>
        <div className="items-center ">
          <h1 className="text-4xl md:text-7xl mt-8 md:mt-2 font-semibold my-7">
            Meet <span className="text-accent">Relive</span>
          </h1>
          <p className="mb-10">
            Relive is a premium anti-aging clinic offering advanced,
            science-based <br></br> therapies to support longevity and overall
            wellness. We blend cutting-edge <br></br> medical technology with
            personalized care to help you feel your best—at any age.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
