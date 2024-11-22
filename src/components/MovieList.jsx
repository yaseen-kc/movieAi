import MovieCard from "./MovieCard";

import { useRef } from "react";

const MovieList = ({ title, movies }) => {
  const scrollContainerRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="px-6">
      <h1 className="text-3xl py-6 text-white">{title}</h1>
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-lg text-xl"
          onClick={handleScrollLeft}
        >
          {"<"}
        </button>
        <div
          ref={scrollContainerRef}
          className="flex overflow-hidden"
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="flex">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-lg text-lg"
          onClick={handleScrollRight}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default MovieList;
