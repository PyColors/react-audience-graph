import React, { useEffect, Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useFetch } from "../../hooks/api.hook";
import { useStoreActions, useStoreState } from "../../hooks/store.hook";

import { RouterProps } from "../../interfaces/router-props.interface";
import { APP_NAME } from "../../constants/constants";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush
} from "recharts";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, coco: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, coco: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, coco: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, coco: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, coco: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, coco: 2500 }
];

const useStyles = makeStyles(theme => ({
  root: {
    overflow: "hidden",
    display: "flex",
    color: "#303333",
    flexGrow: 1,
    width: "100%"
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  main: {
    maxWidth: "100%",
    padding: "100px 25px 200px"
  }
}));

interface HomeProps extends RouterProps {}

const Home = ({ history: { push } }: HomeProps) => {
  const isLoading = useStoreState(state => state.ips.isLoading);
  const ips = useStoreState(state => state.ips.items);
  const fetch = useStoreActions(actions => actions.ips.discuss);
  const reset = useStoreActions(actions => actions.ips.reset);
  const fetchCallback = useFetch(fetch);

  const classes = useStyles();

  useEffect(() => {
    fetchCallback();
    return () => {
      reset();
    };
  }, [fetchCallback, reset]);

  return (
    <Fragment key="home">
      <div className={classes.root}>
        <CssBaseline />

        <Container component="main" className={classes.main}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h4" component="h1" gutterBottom>
                  {APP_NAME}
                </Typography>
              </Paper>
            </Grid>
            {isLoading ? (
              <span>Loading...</span>
            ) : (
              <ul>
                {ips.map((title, index) => (
                  <li key={index}>{title.percentage}</li>
                ))}
              </ul>
            )}
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Capacity offload
                </Typography>
                <AreaChart
                  width={800}
                  height={400}
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Brush dataKey="name" height={30} stroke="#8884d8" />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stackId="1"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                  <Area
                    type="monotone"
                    dataKey="pv"
                    stackId="1"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                  />
                  <Area
                    type="monotone"
                    dataKey="amt"
                    stackId="1"
                    stroke="#ffc658"
                    fill="#ffc658"
                  />
                </AreaChart>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Concurrent viewers
                </Typography>
                <AreaChart
                  width={800}
                  height={400}
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Brush dataKey="name" height={30} stroke="#8884d8" />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stackId="1"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                  <Area
                    type="monotone"
                    dataKey="pv"
                    stackId="1"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                  />
                  <Area
                    type="monotone"
                    dataKey="coco"
                    stackId="1"
                    stroke="#ffc658"
                    fill="#ffc658"
                  />
                </AreaChart>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
};

export default Home;
