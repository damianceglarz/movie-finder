import React from "react";
import PropTypes from "prop-types";

import cssClasses from "./Movie.module.scss";

const Movie = ({ details }) => {
  const renderedDetails = Object.keys(details).map((key) => {
    let value = details[key];

    if (key === "Ratings") {
      value = (
        <ul>
          {details[key].map((rating) => (
            <li key={rating.Source}>
              {rating.Source}: <strong>{rating.Value}</strong>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <tr key={key}>
        <td>{key}</td>
        <td>{value}</td>
      </tr>
    );
  });

  return (
    <>
      <div className={cssClasses.title}>
        "{details.Title}"
        <img src={details.Poster} />
      </div>
      <table className={cssClasses.table}>
        <thead>
          <tr>
            <th width="20%"></th>
            <th width="80%"></th>
          </tr>
        </thead>
        <tbody>{renderedDetails}</tbody>
      </table>
    </>
  );
};

export default Movie;

Movie.propTypes = {
    details: PropTypes.object.isRequired
}
