import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, buyStock, filter, sort}) {
   const sortStocks = (stock1, stock2) =>{
    const stockA = stock1.name.toUpperCase()
    const stockB = stock2.name.toUpperCase()
      if(sort === ""){
        return true
      }else if(sort === "Alphabetically"){
        if(stockA < stockB){
          return -1
        }
        if(stockA > stockB){
          return 1
        }
        return 0
      }else if (sort === "Price"){
        return stock1.price - stock2.price
      }
   }
   
   const filterStocks = stocks.filter(stock => {
     if(filter === ""){
       return true
      }else if(filter === "Tech"){
        return  (stock.type === "Tech")
      }else if (filter === "Finance"){
        return (stock.type === "Finance")
      }else if (filter === "Sportswear"){
        return (stock.type === "Sportswear")
      }
      return null
    })
    
  const sortedStocks = filterStocks.sort(sortStocks)
  const stockList = sortedStocks.map(stock => <Stock stock={stock} 
    handleStock={buyStock} key={stock.id}/>)
  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;
