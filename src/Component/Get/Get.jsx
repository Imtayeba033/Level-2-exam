import React from "react";
import Getin from "../Hero/Team/Getin";
import Team from "../Hero/Team/Team";

const Get = () => {
  return (
    <div>
      <div className="md:mx-10 md:gap-5 bg-base-200 md:w-[1270px] w-[450px] p-5 mx-5">
        <div>
          <Getin></Getin>
        </div>
        <div>
          <Team></Team>
        </div>
      </div>
    </div>
  );
};

export default Get;
