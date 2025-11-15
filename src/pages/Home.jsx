import React from "react";
import { useLoaderData } from "react-router";
import ModelCard from "../components/ModelCard";
import AboutAI from "../components/AboutAI";
import GetStarted from "../components/GetStarted";
import Sliders from "../components/Sliders";
import Timeline from "../components/Timeline";
import Platform from "../components/Platform";


const Home = () => {
  const data = useLoaderData();
//   console.log(data);
  return (
    <div>
      <Sliders></Sliders>


      <div className="text-4xl font-bold mb-4 mt-4">Featured AI Models</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.map((model) => (
          <ModelCard key={model._id} model={model}></ModelCard>
        ))}
      </div>

      <AboutAI></AboutAI>
      <GetStarted></GetStarted>
      {/* <Timeline></Timeline>
      <Platform></Platform> */}
    </div>
  );
};

export default Home;
