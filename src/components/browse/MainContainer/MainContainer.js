import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import useMovieDetails from "../../../hooks/useMovieDetails";

const MainContainer = () => {
  const mainMovie = useMovieDetails("823464");
  if (!mainMovie) return; //not render: also known as early return

  const { title, overview, id, backdrop_path } = mainMovie;
  return (
    <div className="">
      <VideoTitle
        title={title}
        overview={overview}
        backdrop={backdrop_path}
        movieId={id}
      />
      <VideoBackground movieId={id} backdrop={backdrop_path} title={title} />
    </div>
  );
};

export default MainContainer;
