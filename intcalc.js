let main_amount = document.querySelector(".input");
let sec_amount = document.querySelector(".inputs");
let thi_amount = document.querySelector(".inputss");
let four_amount = document.querySelector(".inputsss");

function calculate() {
  let amt = main_amount.value;
  let sec_amt = sec_amount.value;
  let thi_amt = thi_amount.value;
  let x = parseInt(amt);
  console.log(x);
  let y = parseInt(sec_amt);
  console.log(y);
  let z = parseInt(thi_amt);
  console.log(z);
  let r = z / 12;
  console.log(r);
  let find = (x * y) / 100;
  let t = r * find + x;
  console.log(find);
  let finds = t / z;
  console.log(finds);
  four_amount.value = finds;
}
