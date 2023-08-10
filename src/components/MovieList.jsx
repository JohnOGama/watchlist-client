import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ param, thumbnail }) => {
  return (
    <div>
      <Link to={`/movies/${param.slug}`}>
        <img src={thumbnail} className="w-[100px]" />
      </Link>
    </div>
  );
};

export default MovieList;
