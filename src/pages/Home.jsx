import React from "react";
import Slider from "../components/Slider";
import { useLoaderData } from "react-router";
import ModelCard from "../components/ModelCard";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Slider />

      <div className="text-2xl text-center font-bold mt-5">Featured AI Models</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.map((model) => (
          <ModelCard key={model._id} model={model}></ModelCard>
        ))}
      </div>

      
    </div>
  );
};

export default Home;
