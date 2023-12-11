import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx"
// import "./App.css";

function App() {

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [page, setPage] = useState("dashboard");

  return (
    <>
      {page === 'login'? <Login></Login>:<Dashboard></Dashboard>}

    </>
  );
}

export default App;
