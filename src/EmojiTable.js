import React from "react";
import commaNum from "./commaNum";

export default function EmojiTable(props) {
  const cpiEmoji = [
    { emoji: `⛽`, name: `Gas`, cost: 3 },
    { emoji: `🍺`, name: ` Pint`, cost: 9 },
    { emoji: `🎟️`, name: `Netflix Sub`, cost: 14 },
    { emoji: `📱`, name: ` Phone Bill`, cost: 70 },
    { emoji: `🏡`, name: `Rent`, cost: 1078 },
    { emoji: `🚗`, name: `New Car`, cost: 20000 },
  ];
  const RenderTable = (props) => {
    return cpiEmoji.map((data, index) => {
      const { emoji, name, cost } = data;
      return (
        <tr key={index}>
          <td>{emoji}</td>
          <td>{commaNum(name)}</td>
          <td className="">{commaNum(cost * props.priceSats)} ⧖</td>
        </tr>
      );
    });
  };

  return (
    <React.Fragment>
      <div className="d-flex p-4 w-50 justify-content-center container">
        <div className="flex-grow-1 ">
          <table className="table text-light table-sm  ">
            <tbody>
              <RenderTable priceSats={props.priceSats} />
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}
