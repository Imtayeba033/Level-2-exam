import React from "react";
import Hero from "../Hero/Hero";
import Hero2 from "../Hero/Hero2";
import Product from "../Hero/Products/Product";
import Treatment from "../Hero/Treatment/Treatment";
import Client from "../Hero/Client/Client";
import Team from "../Hero/Team/Team";
import Get from "../Get/Get";

const Home = () => {
  return (
    <div>
      <div className="">
        <Hero></Hero>
      </div>
      <div>
        <Hero2></Hero2>
      </div>
      <div className="my-10">
        <Product></Product>
      </div>
      <div className="my-10">
        <Treatment></Treatment>
      </div>
      <div className="my-10">
        <Client></Client>
      </div>
      <div>
        <Get></Get>
      </div>
    </div>
  );
};

export default Home;
