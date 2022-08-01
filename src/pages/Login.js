import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { AccessToken } from "../service";
import axios from "axios";
import {
  base_url,
  emailValid,
  passwordValid,
  Token,
} from "../config/httpRequest";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setAccessToken] = useAtom(AccessToken);
  let navigate = useNavigate();
  async function loginHandler() {
    let config = {
      headers: {
        Authorization: `Bearer ${AccessToken.toString()}`,
        "Access-Control-Allow-Origin": "*",
      },
      email: "test@mail.com",
      password: "tes1234",
    };
    try {
      let response = await axios.get(base_url, config);
      console.log(response);
    } catch (e) {
      console.log(e.message);
    }
  }
  useEffect(() => {
    console.log(AccessToken);
  }, []);
  return (
    <div className="antialiased bg-slate-200 py-10 min-h-screen">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300">
        <h1 className="text-4xl font-medium">Login</h1>
        <p className="text-slate-500">Hi, Welcome back 👋</p>

        <form action="" className="my-10">
          <div className="flex flex-col space-y-5">
            <label htmlFor="email">
              <p className="font-medium text-slate-700 pb-2">Email address</p>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter email address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            <label htmlFor="password">
              <p className="font-medium text-slate-700 pb-2">Password</p>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter your password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>
            {AccessToken && <p>{AccessToken.toString()}</p>}
            <button
              className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
              onClick={(e) => {
                e.preventDefault();
                loginHandler();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              <span>Login</span>
            </button>
            <p className="text-center">
              Not registered yet?{" "}
              <a
                href="#"
                className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
              >
                <span>Register now </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
