import { useState, useEffect } from "react";
import { fetchGetMovieReviews } from "./api-service.js";

export default function Review({ movieId }) {
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    fetchGetMovieReviews(movieId).then((data) => {
      setReviewsList(data.results);
    });
  }, [movieId]);

  return (
    <>
      {reviewsList.length > 0 ? (
        <>
          <ul>
            {reviewsList.map((review) => (
              <li key={review.id}>
                <h4>{review.author}</h4>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p> No results</p>
      )}
    </>
  );
}
