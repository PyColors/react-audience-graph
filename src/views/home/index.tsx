import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { RouterProps } from "../../interfaces/router-props.interface";
import { APP_NAME } from "../../constants/constants";

const useStyles = makeStyles(theme => ({
  root: {
    overflow: "hidden",
    display: "flex",
    color: "#303333",
    flexGrow: 1,
    width: "100%"
  },

  main: { maxWidth: "100%" }
}));

interface HomeProps extends RouterProps {}

const Home = ({ history: { push } }: HomeProps) => {
  const classes = useStyles();

  return (
    <Fragment key="home">
      <div className={classes.root}>
        <CssBaseline />
        <Container component="main" className={classes.main}>
          <Typography variant="h1" component="h1" gutterBottom>
            {APP_NAME}
          </Typography>
        </Container>
      </div>
    </Fragment>
  );
};

export default Home;
