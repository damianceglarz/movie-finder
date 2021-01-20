import React, { memo } from "react";
import PropTypes from "prop-types";

import Input from "../../components/UI/Form/Input/Input";
import Button from "../../components/UI/Form/Button/Button";
import cssClasses from "./Searchbox.module.scss";

const Searchbox = ({ config, searchHandler }) => {
  return (
    <div className={cssClasses.searchbox}>
      <label>Search for your favorite movie: </label>
      <Input {...config} />
      <Button btnType="default" click={searchHandler}>
        Search
      </Button>
    </div>
  );
};
// it is not really improving performance but I placed it here just to show you that I know what is that ^^
export default memo(Searchbox, (prevProps, nextProps) => { 
    return prevProps.config.value === nextProps.config.value;
});

Searchbox.propTypes = {
  config: PropTypes.object.isRequired,
  searchHandler: PropTypes.func.isRequired
}