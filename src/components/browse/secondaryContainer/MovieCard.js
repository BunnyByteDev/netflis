import { IMG_CDN_URL } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ posterPath, title, id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`movie/${id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="relative inline-block p-0.5 cursor-pointer hover:scale-105 ease-in-out duration-300 w-48 md:w-72 md:p-1 sm:w-60"
    >
      <img alt={title} src={IMG_CDN_URL + posterPath} className="w-full" />
      <h3 className="absolute bottom-0 left-0 right-0 px-3 pb-2 font-semibold text-white bg-black bg-opacity-40">
        {title}
      </h3>
    </div>
  );
};

export default MovieCard;
