import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ModelCard from "../components/ModelCard";

const ViewModel = () => {
  const data = useLoaderData();
  const [models, setModels] = useState(data);
  const [loading, setLoading] = useState(false);
  const [selectedFrameworks, setSelectedFrameworks] = useState([])

  const handleSearch = (e) => {
    e.preventDefault();
    const search_title = e.target.search.value;
    console.log(search_title);
    setLoading(true);

    fetch(`http://localhost:4000/search?search=${search_title}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setModels(data);
        setLoading(false);
      });
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    let updatedFrameworks;

    if(selectedFrameworks.includes(value)){
        updatedFrameworks = selectedFrameworks.filter(fw => fw !== value)
    }
    else{
        updatedFrameworks = [...selectedFrameworks, value]
    }
    setSelectedFrameworks(updatedFrameworks)

    if(updatedFrameworks.length > 0){
        setLoading(true)
        const frameworkQuery = updatedFrameworks.join(',')

        fetch(`http://localhost:4000/filter?framework=${frameworkQuery}`)
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
        setLoading(false);
      });
    }
    else{
        setModels(data)
    }

    
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center text-4xl">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="text-3xl text-center font-bold mb-5">View All Models</div>

      <div className="flex flex-col items-center gap-4 md:flex-col lg:flex-row lg:justify-between lg:items-start">
        <div className="flex mb-5">
          <div className="card bg-base-200 p-4 w-full max-w-md">
            <h3 className="font-semibold mb-2">Filter by Framework</h3>
            <div className="flex flex-wrap gap-2">
            {['TensorFlow', 'PyTorch', 'JAX', 'Other'].map((framework) => (
              <label key={framework} className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  value={framework}
                  checked={selectedFrameworks.includes(framework)}
                  onChange={handleFilter}
                  className="checkbox checkbox-primary"
                />
                <span>{framework}</span>
              </label>
            ))}
          </div>
          </div>
        </div>

        <form
          onSubmit={handleSearch}
          className="mt-5 mb-5 flex gap-2"
        >
          <label className="input rounded-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" name="search" placeholder="Search" />
          </label>
          <button className="btn btn-primary rounded-full">Search</button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {models.map((model) => (
          <ModelCard key={model._id} model={model}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default ViewModel;
