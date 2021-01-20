import React, { useState } from "react";
import { connect } from "react-redux";

import { movieSearchStart } from "../../store/creators";

import Movie from "../../components/Movie/Movie";
import Spinner from "../../components/UI/Spinner/Spinner";
import Searchbox from "../../components/Searchbox/Searchbox";
import cssClasses from "./MovieController.module.scss";

export const MovieController = (props) => {
  const [searchedMovieSubstr, setSearchedMovieSubstr] = useState("");
  const inputConfig = {
    type: "text",
    placeholder: "Title...",
    value: searchedMovieSubstr,
    onKeyDown: (e) => {
      if (e.which === 13) handleSearch();
    },
    onChange: (e) => {
      setSearchedMovieSubstr(e.target.value);
    },
  };

  const handleSearch = () => {
    if (searchedMovieSubstr.length) props.onSearchStart(searchedMovieSubstr);
  };

  let content = (
    <div className={cssClasses["no-movie"]}>
      Search for your favorite movie to display details
    </div>
  );
  if (props.error) {
    content = (
      <div className={cssClasses["fetch-error"]}>{props.error.message}</div>
    );
  }
  if (props.loading) content = <Spinner />;
  if (props.movie) content = <Movie details={props.movie} />;

  return (
    <div className={["row", cssClasses.wrapper].join(" ")}>
      <div className="row inner-container">
        <Searchbox config={inputConfig} searchHandler={handleSearch} />
        {content}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state.movie,
    loading: state.movieLoading,
    error: state.movieError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchStart: (substring) => dispatch(movieSearchStart(substring)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieController);
