const indices = [
  {
    title: "NIFTY 50",
    value: "24,856.40",
    change: "+165.20",
    positive: true,
  },
  {
    title: "SENSEX",
    value: "81,725.18",
    change: "+420.80",
    positive: true,
  },
  {
    title: "BANK NIFTY",
    value: "56,920.30",
    change: "-110.25",
    positive: false,
  },
];

function MarketIndices() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {indices.map((item) => (

        <div
          key={item.title}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300"
        >

          <p className="text-slate-400 text-sm">
            {item.title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {item.value}
          </h2>

          <p
            className={`mt-3 font-semibold ${
              item.positive ? "text-green-400" : "text-red-400"
            }`}
          >
            {item.change}
          </p>

        </div>

      ))}

    </div>
  );
}

export default MarketIndices;