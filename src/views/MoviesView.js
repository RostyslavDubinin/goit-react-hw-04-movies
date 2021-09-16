import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import SearchMovie from "../component/SearchMovie";

class MoviesView extends Component {
  state = {
    searchQuery: "",
    movies: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovie();
    }
  }
  onChangeQuery = (query) => {
    // console.log(query);
    this.setState({ searchQuery: query, movies: [] });
  };

  fetchMovie = () => {
    const { searchQuery } = this.state;
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=c7c004f73883764e3275420e8a4c0503&query=${searchQuery}`
      )
      .then((response) => this.setState({ movies: response.data.results }))
      .catch((error) => console.log(error.response.data));
  };
  render() {
    return (
      <>
        <SearchMovie onSubmit={this.onChangeQuery} />

        <ul>
          {this.state.movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`${this.props.match.url}/${movie.id}`}>
                {movie.title}
              </Link>
              ;
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesView;
