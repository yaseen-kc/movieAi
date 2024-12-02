import { useEffect } from "react";
import { API_OPTIONS } from "../components/Constants";
import { useDispatch, useSelector } from "react-redux";
import { AddTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    const shuffledResults = json.results.sort(() => Math.random() - 0.5);
    dispatch(AddTopRatedMovies(shuffledResults));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
