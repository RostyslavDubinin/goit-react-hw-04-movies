import { useState, useEffect } from "react";
import { fetchGetMovieCredits } from "./api-service";

export default function Cast({ movieId }) {
  const [castList, setCastList] = useState(null);

  useEffect(() => {
    fetchGetMovieCredits(movieId).then((data) => {
      setCastList(data.cast);
    });
  }, [movieId]);

  return (
    castList && (
      <ul>
        {castList.map((actor) => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
              width="100"
              height="150"
            ></img>
            <h3>{actor.name}</h3>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    )
  );
}
