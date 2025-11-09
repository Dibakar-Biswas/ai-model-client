import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Login to AI Model Inventory Manager
        </h2>
        <div className="card-body">
          <form>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <p className="text-secondary text-center pt-4">
                Don't have an account ?{" "}
                <Link className="text-blue-600" to="/auth/register">
                  Register
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

export default Login;
