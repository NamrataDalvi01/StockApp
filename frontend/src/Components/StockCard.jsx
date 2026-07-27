function StockCard({ stock }) {

  if (!stock) {
    return null;
  }


  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-8">

      {/* Stock Name */}

      <h2 className="text-2xl font-bold">
        {stock.name}
      </h2>


      {/* Current Price */}

      <h1 className="text-4xl font-bold mt-4">
        ₹{stock.price}
      </h1>


      {/* Change */}

      <p className="mt-2 text-green-400">

        {stock.change > 0 ? "+" : ""}
        {stock.change}

        (
        {stock.changePercent?.toFixed(2)}
        %)

      </p>



      {/* Market Details */}

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">


        <div className="bg-slate-800 p-4 rounded-xl">

          <p className="text-gray-400">
            Open
          </p>

          <h3 className="font-bold">
            ₹{stock.open}
          </h3>

        </div>



        <div className="bg-slate-800 p-4 rounded-xl">

          <p className="text-gray-400">
            High
          </p>

          <h3 className="font-bold">
            ₹{stock.high}
          </h3>

        </div>




        <div className="bg-slate-800 p-4 rounded-xl">

          <p className="text-gray-400">
            Low
          </p>

          <h3 className="font-bold">
            ₹{stock.low}
          </h3>

        </div>




        <div className="bg-slate-800 p-4 rounded-xl">

          <p className="text-gray-400">
            Previous Close
          </p>

          <h3 className="font-bold">
            ₹{stock.previousClose}
          </h3>

        </div>




        <div className="bg-slate-800 p-4 rounded-xl">

          <p className="text-gray-400">
            Volume
          </p>

          <h3 className="font-bold">
            {stock.volume?.toLocaleString()}
          </h3>

        </div>


      </div>


    </div>

  );

}


export default StockCard;