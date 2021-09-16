import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./component/NavBar";
import Container from "./component/Container";
import LoaderView from "./component/Loader";

const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName: "home-page" */)
);

const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage" /* webpackChunkName: "movie-details" */)
);

const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /* webpackChunkName: "movie-page" */)
);

function App() {
  return (
    <Router>
      <Container>
        <NavBar />
        <Suspense fallback={<LoaderView />}>
          <Switch>
            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>

            <Route path="/movies" exact>
              <MoviesPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </Router>
  );
}

export default App;
