import React from "react";
import { Link } from "react-router";

const ModelCard = ({model}) => {
    const {name, useCase, dataset, description, image, createdBy,  _id } = model
  return (
    <div className="card bg-base-200 w-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <figure className="h-48 overflow-hidden">
        <img
          src={image}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-semibold text-2xl mb-3">
          {name}
        </h2>
        <p className="font-semibold text-pink-700 mb-3">
          {createdBy}
        </p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline bg-pink-300">{useCase}</div>
          <div className="badge badge-outline bg-pink-300">{dataset}</div>
        </div>
      </div>
        <p>{description}</p>
        <Link to={`/model-details/${_id}`} className="btn btn-primary mt-3">View Details</Link>
        
    </div> 
  );
};

export default ModelCard;
