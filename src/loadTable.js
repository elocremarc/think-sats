export default function loadTable(props) {
  const tabledata = [];
  const usbills = [1, 5, 10, 20, 100, 1000];

  for (let i = 0; i < usbills.length; i++) {
    tabledata.push({
      qtySats: props.priceSats * usbills[i],
      qtyDolla: usbills[i],
    });
  }
  const scale = 2;
  for (
    let i = usbills[usbills.length - 1] * scale;
    props.priceSats * i <= props.sats;
    i = i * scale
  ) {
    tabledata.push({ qtySats: props.priceSats * i, qtyDolla: i });
  }

  tabledata.push({ qtySats: props.sats, qtyDolla: props.price });

  return tabledata;
}
