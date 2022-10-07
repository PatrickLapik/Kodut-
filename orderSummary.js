function orderSummary(orderDetails){
  var orderDetails

  var koguSumma = 0

  for (var i = 0, row; row = orderDetails.rows[i]; i++){
    var summaKM = row.price * row.vat + row.price
    koguSumma += summaKM * row.amount;
    console.log(row.name)
    console.log(summaKM)
    console.log(row.amount)
  }
  console.log(koguSumma)

}
