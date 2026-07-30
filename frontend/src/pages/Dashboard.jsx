import { TrendingUp } from "lucide-react";

...

return (
  <Layout>

    {/* Hero Section */}
    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 rounded-3xl p-8 shadow-2xl">

      <div className="flex flex-col md:flex-row justify-between items-center">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold flex items-center gap-3">
            <TrendingUp size={40} />
            StockPro
          </h1>

          <p className="text-blue-100 mt-4 text-lg">
            Track live Indian stock prices, market indices and charts in one place.
          </p>
        </div>

        <div className="mt-6 md:mt-0">

          <div className="bg-white/20 backdrop-blur-lg px-6 py-4 rounded-2xl">

            <h2 className="text-3xl font-bold">NSE</h2>

            <p className="text-blue-100">
              Real Time Dashboard
            </p>

          </div>

        </div>

      </div>

    </div>

    <div className="mt-8">
      <MarketIndices />
    </div>

    <div className="mt-8">
      <QuickStats />
    </div>

    <div className="mt-8">
      <SearchBar onSearch={searchStock} />
    </div>

    <StockCard stock={stock} />

    <PriceChart data={chartData} />

  </Layout>
);