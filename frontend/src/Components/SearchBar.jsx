import { useState } from "react";


function SearchBar({ onSearch }) {

    const [symbol, setSymbol] = useState("");


    const handleSearch = () => {

        if(symbol.trim() !== ""){

            onSearch(symbol.toUpperCase());

        }

    };


    return (

        <div className="flex gap-3">

            <input

                type="text"

                value={symbol}

                onChange={(e)=>setSymbol(e.target.value)}

                placeholder="Search Stock (TCS, RELIANCE)"

                className="flex-1 p-4 rounded-xl bg-slate-900 border border-slate-700"

            />


            <button

                onClick={handleSearch}

                className="px-6 bg-blue-600 rounded-xl"

            >

                Search

            </button>


        </div>

    );

}


export default SearchBar;