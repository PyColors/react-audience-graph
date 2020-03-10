import React, { Fragment } from "react";
import { ChildrenProps } from "../../interfaces/children-props";
import Content from "../content";

interface LayoutProps extends ChildrenProps {}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment key="layout">
      <Content>{children}</Content>
    </Fragment>
  );
};

export default Layout;
