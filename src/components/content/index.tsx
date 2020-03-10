import React, { Fragment } from "react";

import { ChildrenProps } from "../../interfaces/children-props";

interface ContentProps extends ChildrenProps {}

const Content = ({ children }: ContentProps) => {
  return <Fragment key="content">{children}</Fragment>;
};

export default Content;
