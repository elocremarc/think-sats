import React, { useState, useEffect } from "react";
import { FaBitcoin, FaGithub } from "react-icons/fa";
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
    priceSats = String(Math.round(sats / btcPrice));
    setPriceSats(priceSats);
  };

  useEffect(() => {
    getPrice();
    document.title = `$1 buys ${commaNum(priceSats)} Sats`;
  });


const tabledata = []

const usbills = [1,5,10,20,100,1000]

for (let i=0; i<usbills.length; i++) {
  tabledata.push({qtySats: priceSats*usbills[i], qtyDolla: usbills[i]},)
}

const scale = 2;

for (let i=usbills[usbills.length-1]*scale; priceSats*i<=sats; i=i*scale){

tabledata.push({qtySats: priceSats*i, qtyDolla: i},)

}

tabledata.push({qtySats: sats, qtyDolla: price})


const RenderTable = () => {
return tabledata.map((data,index) => {
  const {qtySats, qtyDolla,} = data
  return (
    <tr key={index}> 
      <td>${commaNum(qtyDolla)}</td>
      <td>{commaNum(qtySats)}</td>
    </tr>
  )

})



}




  return (
    <React.Fragment>
      <div class="container">
        <div class="col-12 text-light text-center">
          <h1 class="display-4 text-center pt-4">Think Sats</h1>
          <h5> $1 buys {commaNum(priceSats)} sats</h5>
        </div>

        <div class="d-flex justify-content-center">
          <p class="w-75 container pt-4 text-left text-light">
            A Bitcoin can be broken down into {commaNum(sats)} sats. Thinking in
            terms of sats is much more useful than looking at the bitcoin price.
            Currently if you spend $1 it is like spending {commaNum(priceSats)} sats.
            Bookmark this site and check back to calibrate as the price changes.
          </p>
        </div>


        <div class="d-flex p-4 w-75 justify-content-center container">
          <div class="flex-grow-1 ">
          <table class="table text-light table-sm ">
          <thead>
            <tr>
            <th>Dollars</th>
              <th>Sats</th>
            </tr>
          </thead>
          <tbody>
      <RenderTable/>
          </tbody>
        </table>
          
          
          
          </div>
        </div>
        <div class="col-sm-4"></div>
        <div
          class="col-12 m-3 text-center text-light
        p-4"
        >
          <div class="d-flex flex-row  rounded-top bg-dark  fixed-bottom p-2">
            <a
              class="text-light"
              href="https://github.com/elocremarc/think-sats"
            >
              <FaGithub />
            </a>
            <div class="flex-fill">
              {<FaBitcoin />} = ${price}
            </div>

            <a
              class="link text-light"
              href="https://www.coindesk.com/price/bitcoin"
            >
              {" "}
              Powered by CoinDesk
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BtcPrice;
