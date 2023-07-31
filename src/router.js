import { createBrowserRouter } from "react-router-dom";
import { Main, User } from "./pages";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/user/:userId", element: <User /> },
    ],
  },
]);
export default router;
