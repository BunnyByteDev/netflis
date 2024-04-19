import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../components/login/Login";
import MovieDetails from "../components/browse/secondaryContainer/MovieDetails";
import Browse from "../components/browse/Browse";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
    { path: "browse/movie/:movieId", element: <MovieDetails /> },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
