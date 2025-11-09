import React, { use, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, setUser, signInWithGoogle } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [passError, setPassError] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.target);
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log({ name, email, photo, password });

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      //   console.log("password did not match");
      setPassError(
        "Password should be 6 character or longer and must contain one upperCase and one lowerCase"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("User created successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Please match all credential");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleTogglePassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register for AI Model Inventory Manager
        </h2>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
                required
              />

              {/* email */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* photoURL */}
              <label className="label">PhotoURL</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="PhotoURL"
                required
              />

              {/* password */}
              <label className="label">Password</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input"
                  placeholder="Password"
                  required
                />
                {passError && (
                  <p className="text-xs text-red-600">{passError}</p>
                )}
                <button
                  onClick={handleTogglePassword}
                  className="btn btn-xs absolute top-2 right-5"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
              <p className="text-secondary text-center pt-4">
                Already have an account ?{" "}
                <Link className="text-blue-600" to="/auth/login">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white rounded-full text-black border-[#e5e5e5]"
          >
            <FaGoogle />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
