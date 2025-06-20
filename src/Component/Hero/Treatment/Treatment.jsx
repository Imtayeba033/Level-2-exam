import React from "react";

const Treatment = () => {
  return (
    <div>
      <div className="flex justify-center items-center text-center mt-10 mx-10">
        <div className="leading-6">
          <h1 className="md:text-7xl text-5xl font-semibold">
            Our <span className="text-accent">Specialized Treatments</span>
          </h1>
          <br></br>
          <p className="md:text-xl text-md">
            Explore our wide range of innovative anti-aging solutions.
          </p>
        </div>
      </div>
      {/* card */}
      <div className="  mx-3 md:px-30 px-0 py-5 grid md:grid-cols-3 md:py-20   md:mx-10 gap-5">
        <div className="flex justify-start md:grid md:grid-cols-3 ">
          <div className="card  bg-base-200 md:w-[320px] w-[420px] md:h-[330px] mt-6 shadow mx-4  ">
            <div className="card-body">
              <img className="h-20 w-20" src="/src/assets/Frame.png" alt="" />
              <br></br>
              <h2 className="text-2xl font-bold">Peptide Therapy</h2>

              <p className="text-xl">
                Boost cellular regeneration and vitality.
              </p>
              <div className="card-actions ">
                <span className="text-xl text-accent font-bold">
                  Learn More
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card  bg-base-200 md:w-[320px] w-[420px] md:h-[330px] mt-6 shadow mx-4">
            <div className="card-body">
              <img
                className="h-20 w-20"
                src="/src/assets/Frame (1).png"
                alt=""
              />
              <br></br>
              <h2 className="text-2xl font-bold">Hormone Replacement</h2>

              <p className="text-xl">
                Restore balance, energy,<br></br> and well-being.
              </p>
              <div className="card-actions ">
                <span className="text-xl text-accent font-bold">
                  Learn More
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card  bg-base-200 md:w-[320px] w-[420px] md:h-[330px] mx-4  mt-6 shadow">
            <div className="card-body">
              <img
                className="h-20 w-20"
                src="/src/assets/Frame (2).png"
                alt=""
              />
              <br></br>
              <h2 className="text-2xl font-bold">Skin Rejuvenation</h2>

              <p className="text-xl">Advanced treatments for youthful skin.</p>
              <div className="card-actions ">
                <span className="text-xl text-accent font-bold">
                  Learn More
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
