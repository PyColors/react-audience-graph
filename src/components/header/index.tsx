import { AppBar, Toolbar } from "@material-ui/core";
import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { Logo } from "./components";
import Link from "@material-ui/core/Link";
import useStyles from "./style";
import GetDateCurrentTime from "../../helper/get-current-time";

const Header = () => {
  const classes = useStyles();

  return (
    <Fragment key="header">
      <AppBar position="fixed">
        <Grid container className={classes.toolbar}>
          <Grid item xs={6}>
            <Toolbar>
              <Link variant="button" href="/" className={classes.link}>
                <Logo />
              </Link>
            </Toolbar>
          </Grid>
          <Grid item xs={6}>
            <GetDateCurrentTime />
          </Grid>
        </Grid>
      </AppBar>
    </Fragment>
  );
};

export default Header;
