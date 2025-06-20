import React from "react";

const Singleproduct = ({ products }) => {
  const { name, ratings, price, img } = products;

  return (
    <div className="card bg-base-100 w-56 md:w-[300px] shadow-sm mb-10">
      <figure className="px-10 pt-10">
        <img src={img} alt="" className="rounded-xl w-64 h-56" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold mt-4 text-xl">{name}</h2>
        <div className="flex justify-center items-center md:gap-20 gap-8 font-semibold mt-4">
          <div>
            <h1 className="text-xl">{price}</h1>
          </div>
          <div className="flex justify-center items-center gap-3">
            <img className="w-5  h-5" src="/src/assets/star.png" alt="" />
            <h1 className="text-[15px]">{ratings} Ratings</h1>
          </div>
        </div>
        <div className="card-actions mt-4">
          <button className="btn btn-accent w-36 md:w-56 text-white font-semibold text-lg rounded-4xl">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
