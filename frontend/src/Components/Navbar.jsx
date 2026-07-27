function Navbar() {
  return (

    <div className="bg-slate-900 rounded-2xl p-6 flex justify-between items-center border border-slate-800">

      <div>

        <h1 className="text-3xl font-bold">

          Indian Stock Dashboard

        </h1>

        <p className="text-slate-400 mt-2">

          Live NSE & BSE Market Data

        </p>

      </div>

      <div>

        <button className="bg-blue-600 px-5 py-3 rounded-xl hover:bg-blue-700">

          Dark Theme

        </button>

      </div>

    </div>

  );
}

export default Navbar;