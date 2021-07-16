import React from "react";
import commaNum from "./commaNum";

export default function FullTable(props) {
  const RenderTable = () => {
    return props.tabledata.map((data, index) => {
      const { qtySats, qtyDolla } = data;
      return (
        <tr key={index}>
          <td>${commaNum(qtyDolla)}</td>
          <td>{commaNum(qtySats)} ⧖</td>
        </tr>
      );
    });
  };
  return (
    <React.Fragment>
      <div className="d-flex p-4 w-50 justify-content-center container">
        <div className="flex-grow-1 ">
          <table className="table text-light table-sm text-left">
            <thead>
              <tr>
                <th>Dollars</th>
                <th>Sats</th>
              </tr>
            </thead>
            <tbody>
              <RenderTable price={props.price} priceSats={props.priceSats} />
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}
