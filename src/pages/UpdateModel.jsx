import React from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";

const UpdateModel = () => {
  const data = useLoaderData();
  const model = data.result;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      framework: e.target.framework.value,
      useCase: e.target.useCase.value,
      dataset: e.target.dataset.value,
      description: e.target.description.value,
      image: e.target.image.value,
    };
    fetch(`http://localhost:4000/models/${model._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully update!")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Update Model</h2>
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              {/* Name */}
              <div>
                <label className="label font-medium text-center">Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={model.name}
                  className="input rounded-full"
                  placeholder="Enter Name"
                  required
                />
              </div>
              {/* Framework Dropdown */}
              <div>
                <label className="label font-medium">Framework</label>
                <select
                  defaultValue={model.framework}
                  name="framework"
                  required
                  className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
                >
                  <option value="" disabled>
                    Select framework
                  </option>
                  <option value="PyTorch">PyTorch</option>
                  <option value="TensorFlow">TensorFlow</option>
                  <option value="Keras">Keras</option>
                  <option value="MXNet">MXNet</option>
                  <option value="JAX">JAX</option>
                  <option value="Theano">Theano</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* UseCase  */}
              <div>
                <label className="label font-medium text-center">UseCase</label>
                <input
                  type="text"
                  defaultValue={model.useCase}
                  name="useCase"
                  className="input rounded-full"
                  placeholder="UseCase"
                  required
                />
              </div>

              {/* Dataset */}
              <div>
                <label className="label font-medium text-center">Dataset</label>
                <input
                  type="text"
                  name="dataset"
                  defaultValue={model.dataset}
                  className="input rounded-full"
                  placeholder="Dataset"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="label font-medium">Description</label>
                <textarea
                  name="description"
                  required
                  defaultValue={model.description}
                  rows="3"
                  className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
                  placeholder="Enter description"
                ></textarea>
              </div>

              {/* Image */}
              <div>
                <label className="label font-medium">Image URL</label>
                <input
                  type="url"
                  name="image"
                  defaultValue={model.image}
                  required
                  className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <button className="btn btn-primary mt-4">Update Model</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateModel;
