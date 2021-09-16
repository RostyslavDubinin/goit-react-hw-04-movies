import { useState, useEffect, lazy, Suspense } from "react";
import {
  Route,
  NavLink,
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { fetchGetMovieDetails } from "./api-service.js";
import LoaderView from "../component/Loader";

const Review = lazy(() => import("./Review" /* webpackChunkName: "review" */));
const Cast = lazy(() => import("./Cast" /* webpackChunkName: "cast" */));

export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();

  useEffect(() => {
    fetchGetMovieDetails(movieId).then((movie) => {
      setMovie(movie);
    });
  }, [movieId]);

  const onScrollPage = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.clientHeight,
        behavior: "smooth",
      });
    }, 1200);
  };
  const handleGoBack = () => {
    history.push(location?.state?.from?.location ?? "/");
  };
  return (
    <>
      {movie && (
        <>
          <div>
            <button onClick={handleGoBack} type="button">
              Go back
            </button>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <div>
                <h2>{movie.title}</h2>
                <p>User Score: {movie.vote_average} </p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <p>{movie.genres.map((genre) => genre.name).join(" , ")}</p>
              </div>
            </div>
            <div>
              <h3>Additional information</h3>
              <ul>
                <li>
                  <NavLink
                    onClick={() => {
                      onScrollPage();
                    }}
                    to={{
                      pathname: `${url}/cast`,
                      state: { from: location?.state?.from ?? "/" },
                    }}
                  >
                    Cast
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => {
                      onScrollPage();
                    }}
                    to={{
                      pathname: `${url}/reviews`,
                      state: { from: location?.state?.from ?? "/" },
                    }}
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <Suspense fallback={<LoaderView />}>
            <Route path={`${path}/cast`}>
              <Cast movieId={movieId} />
            </Route>
            <Route path={`${path}/reviews`}>
              <Review movieId={movieId} />
            </Route>
          </Suspense>
        </>
      )}
    </>
  );
}
