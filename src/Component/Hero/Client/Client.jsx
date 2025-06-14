import React from "react";

const Client = () => {
  return (
    <div className="px-5 md:px-10 flex justify-center items-center">
      <div className="bg-[#09514D] md:w-[1220px] w-[340px] h-[1500px] md:h-[600px] rounded-4xl mx-8">
        <div className="leading-6">
          <div>
            <div className="flex justify-center items-center text-center ">
              <div className="leading-6 text-white mt-10">
                <h1 className="text-2xl md:text-7xl font-semibold">
                  What Our
                  <span className="text-accent"> Client</span> Say
                </h1>
                <br></br>
                <p className="md:text-xl text-md mx-5">
                  Explore our wide range of innovative anti-aging solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" block md:grid md:grid-cols-3 grid-cols-1  mx-4 md:mx-16 md:gap-16 items-center">
          <div className="">
            <div className="  bg-base-100 shadow-sm  mt-14 rounded-2xl h-[380px] md:h-[330px] p-5 md:w-[300px] w-[250px] mx-7">
              <div className="md:flex justify-center ">
                <figure>
                  <img
                    className="h-20 w-20 mr-24"
                    src="/src/assets/Ellipse 1.png"
                    alt="Movie"
                  />
                </figure>
                <div className="">
                  <p className="text-xl font-semibold">Sarah Johnson</p>
                  <p>Age: 45</p>
                </div>
              </div>
              <div className=" md:flex justify-center gap-5 mt-5">
                <img
                  className="h-8 w-8"
                  src="/src/assets/Vector (2).png"
                  alt=""
                />
                <p className="text-md">
                  After just three months with <br></br>Relive's peptide
                  therapy, I <br></br>feel like I've turned back the <br></br>
                  clock by a decade. My energy levels are through the roof!
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="  bg-base-100 shadow-sm  mt-14 rounded-2xl  h-[380px] md:h-[330px] p-5 md:w-[300px] w-[250px] mx-7">
              <div className="md:flex justify-center   gap-5 ">
                <figure>
                  <img
                    className="h-20 w-20 mr-24"
                    src="/src/assets/Ellipse 2.png"
                    alt="Movie"
                  />
                </figure>
                <div className="">
                  <p className="text-xl font-semibold">Michael Thomas</p>
                  <p>Age: 42</p>
                </div>
              </div>
              <div className=" md:flex justify-center gap-10 mt-5">
                <img
                  className="h-8 w-8 "
                  src="/src/assets/Vector (2).png"
                  alt=""
                />
                <p className="text-md">
                  The hormone replacement <br></br>therapy at Relive has
                  completely transformed <br></br>my quality of life. I sleep
                  better, think clearer.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="  bg-base-100 shadow-sm  mt-14 rounded-2xl  h-[380px] md:h-[330px]  md:w-[300px] w-[250px] p-5 mx-7">
              <div className="md:flex justify-center  gap-5 ">
                <figure>
                  <img
                    className="h-20 w-20 mr-24"
                    src="/src/assets/Ellipse 3.png"
                    alt="Movie"
                  />
                </figure>
                <div className="">
                  <p className="text-xl font-semibold">Faraday Henry</p>
                  <p>Age: 48</p>
                </div>
              </div>
              <div className=" md:flex justify-center gap-10 mt-5">
                <img
                  className="h-8 w-8"
                  src="/src/assets/Vector (2).png"
                  alt=""
                />
                <p className="text-md">
                  After just three months with<br></br> Relive's peptide
                  therapy, I<br></br> feel like I've turned back the clock by a
                  decade.<br></br> My energy levels are through the roof!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
