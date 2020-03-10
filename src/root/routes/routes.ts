import { Route } from "../../interfaces/route.interface";
import Home from "../../views/home";

export const routes: Route[] = [
  {
    path: "/",
    exact: true,
    component: Home
  }
];
