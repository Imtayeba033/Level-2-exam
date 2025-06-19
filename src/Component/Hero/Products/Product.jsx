import React, { useEffect, useState } from "react";
import Singleproduct from "./Singleproduct";

const Product = () => {
  const [product, setAllproduct] = useState([]);
  useEffect(() => {
    fetch("https://exam-backend-server.vercel.app/medicine")
      .then((res) => res.json())
      .then((data) => setAllproduct(data));
  }, []);

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
      <div>
        <div className="mt-20 md:mx-20 grid grid-cols-1 gap-16 mx-16 md:grid-cols-4">
          {product.map((products) => (
            <Singleproduct
              key={products.id}
              products={products}
            ></Singleproduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
