import React, { useState, useEffect } from "react";
import { FaBitcoin } from "react-icons/fa";
import "./App.css";

const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

const BtcPrice = () => {
  const [price, setPrice] = useState([]);
  let [priceSats, setPriceSats] = useState([]);

  function commaNum(num) {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

  const getPrice = async () => {
    const response = await fetch(url);
    const price = await response.json();
    let btcPrice = price.bpi.USD.rate_float;
    let btcRnd = Math.round(btcPrice);
    setPrice(commaNum(btcRnd));
    priceSats = String(Math.round(100000000 / btcPrice));
    setPriceSats(commaNum(priceSats));

    //console.log(btcPrice);
  };
  console.log(price);
  useEffect(() => {
    getPrice();
    document.title = `$1 buys ${priceSats} Satoshis`;
  });

  return (
    <React.Fragment>
      <div class="max-width">
        <div class="container vh-100 ">
          <div class="row">
            <div class="col-12 m-3 text-center text-light ">
              <h1 class="display-4">Think Sats</h1>
              <h1></h1>
              <h5 class="m-2">$1 buys {priceSats} sats</h5>
            </div>
            <div class="row col-12">
              <div class="col-sm-4"></div>
              <div class="col-sm-4 text-light text-center m-4 ">
                <div class="p">
                  Thinking in sats is when you price everything in your life in
                  satoshis. Currently if you spend $1 it is like spending{" "}
                  {priceSats} satoshis. Use this site to calibrate as the price
                  changes.
                </div>
                <br></br>
                <div class="p">1 bitcoin = 100,000,000 Satoshis</div>
              </div>
            </div>

            <div class="d-flex flex-column">
              <div class="flex-grow-1 "></div>
            </div>
            <div class="col-sm-4"></div>
            <div class="col-12 m-3 text-center text-light">
              <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom">
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default BtcPrice;
