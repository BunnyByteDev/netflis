import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MovieList = ({ title, movies }) => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
  };

  return (
    <div className="p-1">
      <h1 className="text-md py-1 text-white">{title}</h1>
      <div className="relative flex items-center h-50">
        <MdChevronLeft
          size={40}
          className="opacity-50 cursor-pointer hover:opacity-100 text-white absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
          onClick={slideLeft}
        />
        <div
          ref={sliderRef}
          className="w-screen h-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar"
        >
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.backdrop_path}
              title={movie.title || movie.name}
              id={movie.id}
            />
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100 text-white absolute right-0 top-1/2 transform -translate-y-1/2
          bg-black bg-opacity-45"
          onClick={slideRight}
          size={40}
        />
      </div>
    </div>
  );
};

export default MovieList;
