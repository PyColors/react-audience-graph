import React, { Fragment, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  currentTitme: {
    padding: "0 24px 0",
    margin: "0",
    fontWeight: "bold",
    textAlign: "right",
    fontSize: "24px",
    lineHeight: "2.65",
    color: "#333"
  }
}));

const GetCurrentTime = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);

    return function() {
      clearInterval(interval);
    };
  }, []);

  const classes = useStyles();

  return (
    <Fragment key="header">
      <p className={classes.currentTitme}>
        {("0" + date.getHours()).slice(-2) +
          ":" +
          ("0" + date.getMinutes()).slice(-2) +
          ":" +
          ("0" + date.getSeconds()).slice(-2)}
      </p>
    </Fragment>
  );
};

export default GetCurrentTime;
