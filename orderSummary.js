function order(orderDetails){
  var orderDetails

  var koguSumma = 0

  for (var i = 0, row; row = orderDetails.rows[i]; i++){
    var summaKM = row.price * row.vat + row.price
    koguSumma += summaKM * row.amount;
    console.log("Product name: " + row.name)
    console.log("Product price: " + summaKM)
    console.log("Number of products: " + row.amount)
  }
  console.log("Total price: " + koguSumma)

}
