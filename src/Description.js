import React from "react";
import commaNum from "./commaNum";

export default function Description(props) {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <p className="w-75 container pt-4 text-left text-light">
          A Bitcoin can be broken down into {commaNum(props.sats)} sats.
          Thinking in terms of sats is much more useful than looking at the
          bitcoin price. Currently if you spend $1 it is like spending{" "}
          {commaNum(props.priceSats)} sats. Bookmark this site and check back to
          calibrate as the price changes.
        </p>
      </div>
    </React.Fragment>
  );
}
