import React, { useEffect, useState } from "react";
import Singleproduct from "./Singleproduct";

const Product = () => {
  const [product, setAllproduct] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const handleClick = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    fetch("https://exam-backend-server.vercel.app/medicine")
      .then((res) => res.json())
      .then((data) => setAllproduct(data));
  }, []);

  return (
    <div className="mb-9">
      <div className="flex justify-center items-center text-center mx-2">
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
      {/*  */}
      <div>
        {showAll === true ? (
          <div className="mt-20 md:mx-20 grid grid-cols-2 gap-5 md:gap-16 mx-5 md:grid-cols-4 duration-200">
            {product.slice(0, 4).map((products) => (
              <Singleproduct
                key={products.id}
                products={products}
              ></Singleproduct>
            ))}
          </div>
        ) : (
          <div className="mt-20  md:mx-20 grid grid-cols-2 gap-5 md:gap-16 mx-10 md:grid-cols-4 duration-200">
            {product.map((products) => (
              <Singleproduct
                key={products.id}
                products={products}
              ></Singleproduct>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-center ">
        {showAll ? (
          <button
            onClick={handleClick}
            className="btn btn-accent text-white m-4 rounded-3xl p-6 mt-12"
          >
            Show All Data
          </button>
        ) : (
          <button
            onClick={handleClick}
            className="btn btn-accent text-white m-4 rounded-3xl p-6 mt-12"
          >
            Showless Data
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
