import { IMG_CDN } from "./Constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img
        className="rounded-sm"
        src={IMG_CDN + posterPath}
        alt="Movie Poster"
      />
    </div>
  );
};

export default MovieCard;
