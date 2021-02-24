import React from "react";
import commaNum from "./commaNum";

export default function Header(props) {
  return (
    <React.Fragment>
      <div className="col-12 text-light text-center">
        <h1 className="display-4 text-center pt-4">Think Sats</h1>
        <h5> $1 buys {commaNum(props.priceSats)} sats</h5>
      </div>
    </React.Fragment>
  );
}
