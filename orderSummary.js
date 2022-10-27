function orderSummary(orderDetails){

    var koguSumma = 0
  
    for (let i = 0, row; row = orderDetails.rows[i]; i++){
      let tooteKM = row.price * row.vat
      let tooteSummaKM = tooteKM + row.price
      koguSumma += tooteSummaKM * row.amount
      console.log(row.name)
      console.log(tooteKM)
      console.log(tooteSummaKM)
      console.log(row.amount)
      
    }

    console.log(koguSumma)
  
  }
