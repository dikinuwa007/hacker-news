import App from "./App";
import DetailPost from "./pages/DetailPost";

import { createBrowserRouter,Navigate } from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
    children: [
      {
        path: '',
        skipLazyLoad: true,
        element: <Navigate to="posts" />,
      },

      {
        path: "posts",
        element: <Home />,
      },
      {
        path: "/posts/:id",
        element: <DetailPost />,
      },
    ],
  },
]);

export default router;
