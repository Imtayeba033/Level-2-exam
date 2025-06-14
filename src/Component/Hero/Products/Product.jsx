import React from "react";

const Product = () => {
  return (
    <div>
      <div className="flex justify-center items-center text-center mx-5">
        <div className="leading-6">
          <h1 className="md:text-7xl text-5xl font-semibold">
            Our <span className="text-accent">Products</span>
          </h1>
          <br></br>
          <p className="md:text-xl text-md ">
            Optimize your results with expertly curated peptide combinations
            designed to <br></br>enhance effectiveness and deliver maximum
            benefits.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Product;
