import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roots from "./Component/Roots/Roots";
import Error from "./Component/Error/Error";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Shop from "./Component/Shop/Shop";
import Contact from "./Component/Contact/Contact";
import SignIn from "./Component/SignIn/SignIn";
import SignUp from "./Component/SignUp/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/shop",
          element: <Shop></Shop>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/signin",
          element: <SignIn></SignIn>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
      ],
    },
  ]);
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
