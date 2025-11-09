import React, { use, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { signIn, signInWithGoogle } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate(location?.state?.from?.pathname || "/");
        toast.success("Logged in successfully");
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
        navigate(location?.state?.from?.pathname || "/");
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
          Login to AI Model Inventory Manager
        </h2>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
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
                
                <button
                  onClick={handleTogglePassword}
                  className="btn btn-xs absolute top-2 right-5"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* <input name="password" type="password" className="input" placeholder="Password" /> */}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
              <p className="text-secondary text-center pt-4">
                Don't have an account ?{" "}
                <Link className="text-blue-600" to="/auth/register">
                  Register
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

export default Login;




// const Login = () => {
//   const { signIn, signInWithGoogle } = useContext(AuthContext);
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const location = useLocation();
//   const navigate = useNavigate();
//   const from = location?.state?.from?.pathname || "/";

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setLoading(true);
    
//     const email = e.target.email.value;
//     const password = e.target.password.value;
    
//     signIn(email, password)
//       .then((result) => {
//         console.log(result.user);
//         e.target.reset();
//         navigate(from, { replace: true });
//         toast.success("Logged in successfully");
//       })
//       .catch((error) => {
//         console.log(error);
//         toast.error("Invalid email or password");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   const handleGoogleSignIn = () => {
//     signInWithGoogle()
//       .then((result) => {
//         console.log(result.user);
//         navigate(from, { replace: true });
//         toast.success("Logged in successfully");
//       })
//       .catch((error) => {
//         console.log(error);
//         toast.error("Failed to sign in with Google");
//       });
//   };

//   const handleTogglePassword = (event) => {
//     event.preventDefault();
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
//         <h2 className="font-semibold text-2xl text-center px-4">
//           Login to AI Model Inventory Manager
//         </h2>
//         <div className="card-body">
//           <form onSubmit={handleLogin}>
//             <fieldset className="fieldset">
//               {/* Email */}
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 name="email"
//                 type="email"
//                 className="input input-bordered w-full"
//                 placeholder="Enter your email"
//                 required
//               />

//               {/* Password */}
//               <label className="label mt-4">
//                 <span className="label-text">Password</span>
//               </label>
//               <div className="relative">
//                 <input
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   className="input input-bordered w-full"
//                   placeholder="Enter your password"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={handleTogglePassword}
//                   className="btn btn-xs absolute top-3 right-3"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>

//               {/* Forgot Password */}
//               <div className="mt-2">
//                 <a href="#" className="link link-hover text-sm">
//                   Forgot password?
//                 </a>
//               </div>

//               {/* Submit Button */}
//               <button 
//                 type="submit" 
//                 className={`btn btn-neutral w-full mt-6 ${loading ? 'loading' : ''}`}
//                 disabled={loading}
//               >
//                 {loading ? 'Logging in...' : 'Login'}
//               </button>

//               {/* Register Link */}
//               <p className="text-center pt-4 text-sm">
//                 Don't have an account?{" "}
//                 <Link className="text-blue-600 font-semibold" to="/register">
//                   Register
//                 </Link>
//               </p>
//             </fieldset>
//           </form>

//           {/* Divider */}
//           <div className="divider">OR</div>

//           {/* Google Sign In */}
//           <button
//             onClick={handleGoogleSignIn}
//             className="btn bg-white rounded-full text-black border-gray-300 hover:bg-gray-100 w-full"
//           >
//             <FaGoogle className="text-red-500" />
//             Login with Google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
