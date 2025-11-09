import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register for AI Model Inventory Manager
        </h2>
        <div className="card-body">
          <form>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Name" />

              {/* email */}
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />

              {/* photoURL */}
              <label className="label">PhotoURL</label>
              <input type="text" className="input" placeholder="PhotoURL" />

              {/* password */}
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />

              <button className="btn btn-neutral mt-4">Register</button>
              <p className="text-secondary text-center pt-4">
                Already have an account ?{" "}
                <Link className="text-blue-600" to="/auth/login">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
          <button className="btn bg-white rounded-full text-black border-[#e5e5e5]">
            <FaGoogle />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
