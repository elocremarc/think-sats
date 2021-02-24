import React from "react";
import commaNum from "./commaNum";

export default function Description(props) {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <p className="w-75 container pt-4 text-left text-light">
          A Bitcoin can be divided into {commaNum(props.sats)} satoshis or sats.
          Currently $1 buys {commaNum(props.priceSats)} sats. If you think in
          terms of sats you can break the habbit of thinking in terms of
          dollars.
        </p>
      </div>
    </React.Fragment>
  );
}
