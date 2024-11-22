import { useEffect } from "react";
import { API_OPTIONS } from "../components/Constants";
import { useDispatch } from "react-redux";
import { AddUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

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
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
