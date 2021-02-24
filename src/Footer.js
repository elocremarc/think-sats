import React from "react";
import { FaBitcoin, FaGithub } from "react-icons/fa";
import commaNum from "./commaNum";
export default function Footer(props) {
  return (
    <React.Fragment>
      <div className="col-sm-4"></div>
      <div className="col-12 m-3 text-center text-light p-4">
        <div className="d-flex flex-row  rounded-top bg-dark  fixed-bottom p-2">
          <a
            className="text-light"
            href="https://github.com/elocremarc/think-sats"
          >
            <FaGithub />
          </a>
          <div className="flex-fill">
            {<FaBitcoin />} = ${commaNum(props.price)}
          </div>
          <a
            className="link text-light"
            href="https://www.coindesk.com/price/bitcoin"
          >
            {" "}
            Powered by CoinDesk
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
