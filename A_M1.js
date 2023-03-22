let num, product;
function multiplicationTable(num) {
  console.log("The multiplication table of", num, "is:\n");
  for (let i = 1; i <= 10; i++) {
    product = num * i;
    console.log(num, "x", i, "=", product);
  }
  console.log("\n");
}

multiplicationTable(7);
multiplicationTable(5);
multiplicationTable(4);
