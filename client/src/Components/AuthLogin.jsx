import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const AuthLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(username, password);
  };

  return (
    <div>
      <div className="bg-white pl-14 pr-6 pt-3 h-screen background-white">
        <h3 className="text-xl font-bold">Welcome to To Do List 👋</h3>
        <p>Please sign-in to your account, and start manage further</p>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-4 mt-[-15px] font-bold text-lg">Sign</h2>
            {error && <div className="error">{error}</div>}
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
                {isLoading ? "Loading..." : "Sign In"}
              </button>
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
              <>Don't have an account ? </>
              <span
                className="font-bold text-aqua"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                SignUp
              </span>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthLogin;
