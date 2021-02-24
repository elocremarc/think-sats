import React, { useState, useEffect } from "react";
import "./App.css";
import commaNum from "./commaNum";
import Description from "./Description";
import Footer from "./Footer";
import Header from "./Header";
import FullTable from "./FullTable";
import loadTable from "./loadTable";
import LoadingWrapper from "./LoadingWrapper";

const BtcPrice = () => {
  let [price, setPrice] = useState([]);
  let [priceSats, setPriceSats] = useState([]);
  const [loading, setLoading] = useState(true);
  let [tabledata, setTableData] = useState([]);
  const sats = 100000000;

  const getPrice = async () => {
    const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    const response = await fetch(url);
    const apiPrice = await response.json();

    setPrice(Math.round(apiPrice.bpi.USD.rate_float));
    setPriceSats(Math.round(sats / price));
    setTableData(loadTable({ price }));
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
