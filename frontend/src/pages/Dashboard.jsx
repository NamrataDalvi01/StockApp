import { useState } from "react";

import Layout from "../Components/Layout";
import SearchBar from "../Components/SearchBar";
import StockCard from "../Components/StockCard";
import MarketIndices from "../Components/MarketIndices";
import QuickStats from "../Components/QuickStats";
import PriceChart from "../Components/PriceChart";

import { getStock, getChart } from "../Services/api";

function Dashboard() {
  const [stock, setStock] = useState(null);
  const [chartData, setChartData] = useState([]);

  const searchStock = async (symbol) => {
  try {
    console.log("Searching:", symbol);

    const stockResult = await getStock(symbol);
    console.log("Stock:", stockResult);

    setStock(stockResult);

    const chartResult = await getChart(symbol);
    console.log("Chart:", chartResult);

    setChartData(chartResult);

  } 
  
  catch (error) {
  console.error("FULL ERROR:", error);

  if (error.response) {
    console.log("Status:", error.response.status);
    console.log("Data:", error.response.data);
  }

  alert(error.message);
}
};

  return (
    <Layout>

      <MarketIndices />

      <QuickStats />

      <div className="mt-6 md:mt-8">
        <SearchBar onSearch={searchStock} />
      </div>

      <StockCard stock={stock} />

      <PriceChart data={chartData} />

    </Layout>
  );
}

export default Dashboard;