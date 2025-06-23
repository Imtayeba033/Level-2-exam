import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contextt/UserContext";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  // state
  const [user, setUser] = useState({});

  const handleCreateUse = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      // createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const registerUser = result.user;
        setUser(registerUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="text-center shadow-sm p-5 w-96 mx-auto mt-24">
        <h1>{user?.email}</h1>
        <h1>{user?.uid}</h1>
      </div>
      <div className="my-10">
        <div>
          <div>
            <div className="flex justify-center items-center mt-20 mx-32 ">
              <h1 className="md:text-5xl text-2xl font-bold text-teal-500">
                SignUp
              </h1>
            </div>
          </div>
          <div className=" flex justify-center items-center ">
            <div className="shadow-xl p-10 rounded-lg">
              <form onSubmit={handleCreateUse} action="">
                <div className="gap-5 font-semibold text-xl">
                  <p className="text-gray-600">First Name</p>
                  <input
                    type="text"
                    className=" mb-3 input border-2 border-gray-500 rounded w-96"
                    name="firstName"
                    id=""
                    placeholder="Enter your First Name"
                  />
                  <p className="text-gray-600">Last Name</p>
                  <input
                    type="text"
                    className=" mb-3 input border-2 border-gray-500 rounded w-96"
                    name="lastName"
                    id=""
                    placeholder="Enter your Last Name Here"
                  />
                  <p className="text-gray-600">Email</p>
                  <input
                    type="email"
                    className=" mb-3 input border-2 border-gray-500 rounded w-96"
                    name="email"
                    id=""
                    placeholder="Type your Email Here"
                  />
                </div>
                <div className=" gap-5 font-semibold text-xl">
                  <p className="text-gray-600">Password</p>
                  <input
                    type="password"
                    className="mb-3 input border-2 border-gray-500 rounded w-96"
                    name="password"
                    id=""
                    placeholder="Type your Password Here"
                  />
                </div>
                <div className="flex justify-between">
                  <a className="link link-hover">Forgot password?</a>
                  <Link to="/signin" className="link link-hover">
                    Already have an Account
                  </Link>
                </div>
                <button
                  className="btn btn-neutral mt-4 w-full  bg-teal-500 text-white border-white"
                  value="Register"
                >
                  Register
                </button>

                <div className="mt-7 flex justify-between">
                  <button className="btn  bg-teal-500 text-white border-white">
                    <svg
                      aria-label="GitHub logo"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                      ></path>
                    </svg>
                    Continue with GitHub
                  </button>

                  <button className="btn bg-teal-500 text-white border-white">
                    <svg
                      aria-label="Google logo"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path d="m0 0H512V512H0" fill="#fff"></path>
                        <path
                          fill="#34a853"
                          d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                        ></path>
                        <path
                          fill="#4285f4"
                          d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                        ></path>
                        <path
                          fill="#fbbc02"
                          d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                        ></path>
                        <path
                          fill="#ea4335"
                          d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                        ></path>
                      </g>
                    </svg>
                    Continue with Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
