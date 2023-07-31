import { createBrowserRouter } from "react-router-dom";
import { Main, User } from "./pages";
import App from "./App";
import { rootPath } from "./config/config";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: `${rootPath}/`, element: <Main /> },
      { path: `${rootPath}/user/:userId`, element: <User /> },
    ],
  },
]);
export default router;
