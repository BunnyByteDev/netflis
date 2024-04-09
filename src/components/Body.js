import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import Login from "../components/login/Login";
import MovieDetails from "../components/browse/secondaryContainer/MovieDetails";
import Browse from "../components/browse/Browse";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
    { path: "/movie", element: <MovieDetails /> },
  ]);
  return (
    <div
      className="bg-black
    bg-cover"
    >
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
