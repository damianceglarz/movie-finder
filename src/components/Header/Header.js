import React from "react"; //since react17 we can skip this import for JSX only

import cssClasses from "./Header.module.scss";

const Header = () => {
  return (
    <div className={["row", cssClasses.header].join(" ")}>
      <div className="inner-container">
        <h1>Movie finder</h1>
      </div>
    </div>
  );
};

export default Header;
