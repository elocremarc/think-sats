import React, { useState, useEffect } from "react";
import { FaBitcoin } from "react-icons/fa";
import "./App.css";
import commaNum from "./commaNum";

const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

const BtcPrice = () => {
  const [price, setPrice] = useState([]);
  let [priceSats, setPriceSats] = useState([]);
  const sats = 100000000;

  const getPrice = async () => {
    const response = await fetch(url);
    const price = await response.json();
    let btcPrice = price.bpi.USD.rate_float;
    let btcRnd = Math.round(btcPrice);
    setPrice(commaNum(btcRnd));
    priceSats = String(Math.round(100000000 / btcPrice));
    setPriceSats(commaNum(priceSats));
  };

  useEffect(() => {
    getPrice();
    document.title = `$1 buys ${priceSats} Sats`;
  });

  return (
    <React.Fragment>
      <div class="container vh-100">
        <div class="col-12 text-light text-center">
          <h1 class="display-4 text-center">Think Sats</h1>
          <h5>$1 buys {priceSats} sats</h5>
        </div>

        <div class="d-flex justify-content-center">
          <p class="w-50 pt-4 text-left text-light">
            A Bitcoin can be broken down into {commaNum(sats)} sats. Thinking in
            terms of sats is much more useful than looking at the price of
            bitcoin. Currently if you spend $1 it is like spending {priceSats}{" "}
            sats. Use this site to calibrate as the price changes.
          </p>
        </div>

        <div class="d-flex flex-column">
          <div class="flex-grow-1 "></div>
        </div>
        <div class="col-sm-4"></div>
        <div
          class="col-12 m-3 text-center text-light
        p-4"
        >
          <nav class="navbar container  rounded navbar-expand-sm bg-dark navbar-dark fixed-bottom">
            <a class="navbar-brand">
              {<FaBitcoin />} = ${price}{" "}
            </a>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.coindesk.com/price/bitcoin"
                >
                  Powered by CoinDesk
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BtcPrice;
