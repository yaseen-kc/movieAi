import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import getPopularMovies from "../hooks/usePopularMovies";
import getTopRatedMovies from "../hooks/useTopRatedMovies";
import getUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  getPopularMovies();
  getTopRatedMovies();
  getUpcomingMovies();
  return (
    <div>
      <Header /> {/* Render the Header component */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
