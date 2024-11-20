import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header /> {/* Render the Header component */}
    </div>
  );
};

export default Browse;
