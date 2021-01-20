import React, { memo } from "react";

import classes from "./Spinner.module.scss";

const Spinner = (props) => <div className={classes.loader}>Loading...</div>;

// it is not really improving performance but I placed it here just to show you that I know what is that ^^
export default memo(Spinner);
