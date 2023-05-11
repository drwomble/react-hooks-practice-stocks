import { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [myStocks, setMyStocks] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(r => r.json())
    .then(setStocks)
    .catch(err => console.error(err))
  }, [])
  const buyStock = (stockToBuy) => {
    setMyStocks(myStockList => [stockToBuy, ...myStockList])
  }
  const sellStock = (stockToSell) =>{
    setMyStocks(stockList => stockList.filter(stock => stock.id !== stockToSell.id))
  }
  const [filter, setFilter] = useState("")
  const handleFilter = (e) => setFilter(e.target.value)
  
  const [sort, setSort] = useState("")
  const handleSort = (e) => setSort(e.target.value)

  return (
    <div>
      <SearchBar handleFilter={handleFilter} handleSort={handleSort}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} buyStock={buyStock} sort={sort} filter={filter} />
        </div>
        <div className="col-4">
          <PortfolioContainer sellStock={sellStock} myStocks={myStocks}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
