import { useEffect } from "react";
import { API_OPTIONS } from "../components/Constants";
import { useDispatch, useSelector } from "react-redux";
import { AddUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    const shuffledResults = json.results.sort(() => Math.random() - 0.5);
    dispatch(AddUpcomingMovies(shuffledResults));
  };

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
