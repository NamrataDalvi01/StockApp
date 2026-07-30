import { useState } from "react";

function SearchBar({ onSearch }) {
  const [symbol, setSymbol] = useState("");

  const handleSearch = () => {
    if (symbol.trim() !== "") {
      onSearch(symbol.toUpperCase());
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full">
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="Search Stock (TCS, RELIANCE)"
        className="w-full flex-1 p-3 md:p-4 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleSearch}
        className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;