import Chart from "react-apexcharts";

function PriceChart({ data }) {
  if (!data || data.length === 0) return null;

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      background: "transparent",
    },

    theme: {
      mode: "dark",
    },

    xaxis: {
      type: "datetime",
    },

    stroke: {
      curve: "smooth",
      width: 3,
    },

    grid: {
      borderColor: "#334155",
    },
  };

  const series = [
    {
      name: "Price",
      data,
    },
  ];

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 mt-8 p-6">
      <h2 className="text-xl font-bold mb-5">
        📈 Price Chart
      </h2>

      <Chart
        options={options}
        series={series}
        type="area"
        height={400}
      />
    </div>
  );
}

export default PriceChart;