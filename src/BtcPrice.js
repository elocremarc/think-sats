import React, { useState, useEffect } from "react";
import "./App.css";
import commaNum from "./commaNum";
import Description from "./Description";
import Footer from "./Footer";
import Header from "./Header";
import FullTable from "./FullTable";
import loadTable from "./loadTable";
import LoadingWrapper from "./LoadingWrapper";

const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

const BtcPrice = () => {
  const [price, setPrice] = useState([]);
  let [priceSats, setPriceSats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tabledata, setTableData] = useState([]);
  const sats = 100000000;

  const getPrice = async () => {
    const response = await fetch(url);
    const apiPrice = await response.json();

    let btcPrice = apiPrice.bpi.USD.rate_float;
    let btcRnd = Math.round(btcPrice);

    setPrice(commaNum(btcRnd));
    priceSats = String(Math.round(sats / btcPrice));
    setPriceSats(priceSats);

    setTableData(loadTable({ priceSats, sats, price }));

    setLoading(false);
  };

  useEffect(() => {
    getPrice();
    document.title = `$1 buys ${commaNum(priceSats)} Sats`;
  });

  return (
    <LoadingWrapper loading={loading}>
      <React.Fragment>
        <div className="container">
          <Header priceSats={priceSats} />
          <Description priceSats={priceSats} sats={sats} />
          <FullTable tabledata={tabledata} />
          <Footer price={price} />
        </div>
      </React.Fragment>
    </LoadingWrapper>
  );
};

export default BtcPrice;
