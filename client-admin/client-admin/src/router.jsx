import App from "./App";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import DetailPost from "./pages/DetailPost";

import { createBrowserRouter, redirect } from "react-router-dom";
import Register from "./pages/Register";
import Categories from "./pages/Categories";
import Posts from "./pages/Post";
import AddPost from "./pages/AddPost";
import ErrorPage from "./components/errorPage";
function authenticatedUserOnly() {
  if (!localStorage.access_token) {
    return redirect("/login");
  } else {
    return null;
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: authenticatedUserOnly,
    errorElement:<ErrorPage />,
    children: [
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "add",
        element: <AddPost />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "post/:id",
        element: <DetailPost />,
        loader: authenticatedUserOnly,
      },
      {
        path: "categories",
        element: <Categories />,
        loader: authenticatedUserOnly,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

export default router;
