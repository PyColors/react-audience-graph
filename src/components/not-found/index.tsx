import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { RouterProps } from "../../interfaces/router-props.interface";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    color: "#303333",
    height: "100%",
    padding: "14% 0"
  },
  basline: {
    fontSize: "8rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "white"
  }
}));

interface NotFoundProps extends RouterProps {}

const NotFound = ({ history: { push } }: NotFoundProps) => {
  const classes = useStyles();

  return (
    <Fragment key="not-found">
      <div className={classes.root}>
        <CssBaseline />
        <Container component="main" maxWidth="lg">
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            className={classes.basline}
          >
            Page not found
          </Typography>
        </Container>
      </div>
    </Fragment>
  );
};

export default NotFound;
