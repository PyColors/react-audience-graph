import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const Logo = () => {
  return (
    <SvgIcon width="32px" height="32px" viewBox="0 0 32 32">
      <g transform="translate(-1380.000000, -12.000000)">
        <g transform="translate(1380.000000, 12.000000)">
          <polygon
            id="RedFill"
            fill="#ffff07"
            mask="url(#mask-2)"
            points="0 16 32 16 32 0 0 0"
          />
          <polygon
            id="BlackFill"
            fill="#ffff07"
            mask="url(#mask-2)"
            points="0 32 32 32 32 16 0 16"
          />
          <polygon
            id="WhiteFill"
            fill="#222"
            mask="url(#mask-2)"
            points="6 33 26 33 26 15 6 15"
          />
        </g>
      </g>
    </SvgIcon>
  );
};

export default Logo;
