import React from "react";
import Stock from "./Stock";

function PortfolioContainer({myStocks, sellStock}) {
 const myPortfolio = myStocks.map(stock => <Stock key={stock.id}
 handleStock={sellStock} stock={stock}/>)
  return (
    <div>
      <h2>My Portfolio</h2>
        {myPortfolio}
    </div>
  );
}

export default PortfolioContainer;
