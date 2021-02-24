export default function loadTable(props) {
  const sats = 100000000;
  const priceSats = Math.round(sats / props.price);

  const tabledata = [];
  const usbills = [1, 5, 10, 20, 100, 1000];

  for (let i = 0; i < usbills.length; i++) {
    tabledata.push({
      qtySats: priceSats * usbills[i],
      qtyDolla: usbills[i],
    });
  }
  const scale = 2;
  for (
    let i = usbills[usbills.length - 1] * scale;
    priceSats * i <= sats;
    i = i * scale
  ) {
    tabledata.push({ qtySats: priceSats * i, qtyDolla: i });
  }

  tabledata.push({ qtySats: sats, qtyDolla: props.price });

  return tabledata;
}
