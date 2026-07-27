import { useState } from "react";

import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import StockCard from "../components/StockCard";
import MarketIndices from "../components/MarketIndices";
import QuickStats from "../components/QuickStats";
import PriceChart from "../components/PriceChart";

import { getStock, getChart } from "../services/api";

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

      <div className="mt-8">
        <SearchBar onSearch={searchStock} />
      </div>

      <StockCard stock={stock} />

      <PriceChart data={chartData} />

    </Layout>
  );
}

export default Dashboard;