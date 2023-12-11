import { useState } from "react";
// import App from "../App";
// import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {useNavigate} from 'react-router-dom'
function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  // const [page, setPage] = useState("login");
const navigate = useNavigate()
  function changeHandler(event) {
    const { name, value } = event.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  }
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      // let response = await fetch("https://news.apajalah.my.id"+"/users/login", {
      let response = await fetch("http://localhost:3000"+"/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginForm),
      });
      if (response.ok === false) {
        response = await response.json();  
        throw { message: response };
      }
      response = await response.json();
      localStorage.access_token = response.access_token;
      Swal.fire("Berhasil Login!", "Silahkan malakukan tugas anda!", "success");
      navigate('/')
    } catch (error) {
      Swal.fire("Gagal Login!", `${error.message.message}`, "error");
      // console.log(error, "ERRRORRR");
    }
    // console.log(loginForm);
  };

  return (
    <>
      {/*

      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" style={{border:5+'px'}}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm" style={{backgroundColor:'darkblue',color:'white'}}>
          <img
            src="https://i.ibb.co/0nMFK9d/download.png"
            alt="The hackernews"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={submitHandler}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={loginForm.email}
                  onChange={changeHandler}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  value={loginForm.password}
                  onChange={changeHandler}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>


          
        </div>
      </div>
    </>
  );
}
export default Login;
