import React from "react";
import { Link, useLoaderData } from "react-router";
// (Name, Framework, Use Case, Dataset,Description, Image, Purchased Count(e.g, Purchased 3 times))
const ModelDetails = () => {
  const data = useLoaderData();
  const model = data.result;
  console.log(model);
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          <div className="shrink-0 w-full md:w-1/2">
            <img
              src={model.image}
              alt=""
              className="w-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {model.name}
            </h1>

            <div className="flex gap-3">
              <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                {model.framework}
              </div>

              <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                Purchased:
                {model.purchased} times
              </div>
            </div>
            <h2 className="text-2xl font-bold text-yellow-500">
              {model.useCase}
            </h2>
            <h2 className="text-2xl font-bold text-pink-500">
              {model.dataset}
            </h2>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {model.description}
            </p>
            <div className="flex gap-3 mt-5">
                <Link to={`/update-model/${model._id}`} className="btn btn-primary">Update</Link>
                <Link className="btn">Delete</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;
