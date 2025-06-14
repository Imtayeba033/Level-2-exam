import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className=" bg-cover bg-center"
        style={{
          backgroundImage: "url(/src/assets/hero.png)",
        }}
      >
        {/* <div className="hero-overlay"></div> */}
        <div className=" text-white md:w-1/2 w-1/2 md:p-30  md:items-center flex justify-start mt-1 ">
          <div className=" mb-10 my-10 ">
            <h1 className="md:text-[80px] text-5xl  font-semibold mx-5">
              Rediscover Youth,
              <span className="text-accent">Redefine Life.</span>
            </h1>
            <p className="my-10 mx-5 ">
              Embrace a renewed sense of vitality and confidence with <br></br>
              advanced anti-aging therapies. At Relive, we help you unlock{" "}
              <br></br>the best version of yourself—inside and out..
            </p>
            <button className="btn btn-accent mx-5">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
