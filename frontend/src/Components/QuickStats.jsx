const stats = [
  { title: "Market Status", value: "OPEN 🟢" },
  { title: "Currency", value: "₹ INR" },
  { title: "Exchange", value: "NSE / BSE" },
  { title: "Updated", value: "Live" },
];

function QuickStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

      {stats.map((item) => (

        <div
          key={item.title}
          className="bg-slate-900 rounded-2xl border border-slate-800 p-5"
        >

          <p className="text-slate-400">
            {item.title}
          </p>

          <h2 className="text-xl font-bold mt-2">
            {item.value}
          </h2>

        </div>

      ))}

    </div>
  );
}

export default QuickStats;