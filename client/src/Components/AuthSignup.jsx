import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const AuthSignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { signup, error, isLoading } = useSignup();
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  // Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signup(name, phone, username, email, password)
  };


  return (
    <div>
      <div className="bg-white pl-14 pr-6 pt-3 h-screen background-white">
        <h3 className="text-xl font-bold">Welcome to To Do List 👋</h3>
        <p>Please sign-in to your account, and start manage further</p>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-4 mt-[-15px] font-bold text-lg">Login</h2>

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-lg font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                class="block w-80 p-2  text-md text-gray-900 border-2 border-gray-300 rounded-sm  focus:ring-aqua focus:border-aqua dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-aqua dark:focus:border-aqua"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mt-3">
              <label
                for="default-search"
                class="mb-2 block text-lg font-medium text-gray-700 "
              >
                Phone Number
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 px-5  pointer-events-none ">
                  +62
                </div>
                <input
                  type="number"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  class="block w-80 p-3 pl-12 text-md  border-2 border-gray-300 rounded-sm  focus:ring-aqua focus:border-aqua dark:bg-gray-700 dark:border-aqua dark:placeholder-gray-400 dark:text-white dark:focus:ring-aqua dark:focus:border-aqua"
                  required
                />
              </div>
            </div>

            <div className="mt-3">
              <label
                htmlFor="name"
                className="mb-2 block text-lg font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                class="block w-80 p-2  text-md text-gray-900 border-2 border-gray-300 rounded-sm  focus:ring-aqua focus:border-aqua dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-aqua dark:focus:border-aqua"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mt-3">
              <label
                htmlFor="name"
                className="mb-2 block text-lg font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                class="block w-80 p-2  text-md text-gray-900 border-2 border-gray-300 rounded-sm  focus:ring-aqua focus:border-aqua dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-aqua dark:focus:border-aqua"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mt-3 relative">
              <label
                htmlFor="name"
                className="mb-2 block text-lg font-medium text-gray-700"
              >
                Password
              </label>
              <div className="">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  class="block w-80 p-2  text-md text-gray-900 border-2 border-gray-300 rounded-sm  focus:ring-aqua focus:border-aqua dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-aqua dark:focus:border-aqua"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="absolute cursor-pointer right-[9rem] top-11 text-[24px] "
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
            </div>
            <div>
              <button
                className="bg-aqua mb-5 w-80 mt-5 py-2 text-white rounded-sm"
                type="Submit"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Sign Up"}
              </button>
              {error && <div className='bg-red-300'>{error}</div>}
            </div>
            <span
              style={{
                fontSize: "15px",
                cursor: "pointer",
                textDecoration: "none",
                position: "flex",
              }}
            >
              {" "}
              <>Already have an account </>
              <span
                className="font-bold text-aqua"
                onClick={() => {
                
                  navigate("/login");
                }}
              >
                Login
              </span>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthSignUp;
