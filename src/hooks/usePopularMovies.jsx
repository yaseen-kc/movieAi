import { useEffect } from "react";
import { API_OPTIONS } from "../components/Constants";
import { useDispatch } from "react-redux";
import { AddPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    const shuffledResults = json.results.sort(() => Math.random() - 2);
    dispatch(AddPopularMovies(shuffledResults));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
