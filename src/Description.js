import React from "react";
import commaNum from "./commaNum";

export default function Description(props) {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <p className="w-50 container pt-4 text-left text-light">
          A Bitcoin can be divided into {commaNum(props.sats)} ⧖
          (satoshis/sats). Currently $1 buys {commaNum(props.priceSats)} ⧖. If
          you think in terms of sats you can break the habit of thinking in
          terms of dollars.
        </p>
      </div>
    </React.Fragment>
  );
}
