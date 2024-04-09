import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import useNowPlayingMovies from "../../../hooks/useNowPlayingMovies";

const MainContainer = () => {
  const movies = useNowPlayingMovies();
  if (!movies) return; //not render: also known as early return
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div
      className="md:pt-0
    bg-black"
    >
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
