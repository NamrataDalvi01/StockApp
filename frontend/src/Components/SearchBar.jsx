import { useState } from "react";
import { Search } from "lucide-react";

function SearchBar({ onSearch }) {
  const [symbol, setSymbol] = useState("");

  const handleSearch = () => {
    if (symbol.trim() !== "") {
      onSearch(symbol.toUpperCase());
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl">

      <div className="flex flex-col md:flex-row gap-4">

        <div className="flex items-center flex-1 bg-slate-800 rounded-xl px-4">

          <Search className="text-slate-400" size={20} />

          <input
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search TCS, RELIANCE..."
            className="bg-transparent flex-1 p-4 outline-none"
          />

        </div>

        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold"
        >
          Search
        </button>

      </div>

    </div>
  );
}

export default SearchBar;