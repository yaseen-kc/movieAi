import { useSelector } from "react-redux";
import lang from "./LanguageConstants";
import { useRef } from "react";
import genAI from "./gemini";
import { API_OPTIONS } from "./Constants";

const GptSearchBar = () => {
  const lanKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt =
      "act as a movie reviewer and suggest some movies for the query: " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example: Lucifer, Naran, Dangal, Ajagajantharam, Thaneer Mathan Dinanagal";

    const result = await model.generateContent(prompt);
    const gptMovies = result.response.text().split(",");

    const data = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(data);
    console.log(tmdbResults);
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[lanKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[lanKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
