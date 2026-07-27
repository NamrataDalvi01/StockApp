const express = require("express");
const cors = require("cors");
const YahooFinance = require("yahoo-finance2").default;
const yahooFinance = new YahooFinance();
const stocks = require("./data/stock.json");

const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const app = express();

app.use(cors());
app.use(express.json());
const csvPath = path.join(__dirname, "data", "EQUITY_L.csv");

fs.createReadStream(csvPath)
.pipe(csv())
.on("data",(row)=>{

    stocks.push({

        symbol: row.SYMBOL,

        name: row["NAME OF COMPANY"]

    });

})
.on("end",()=>{

    console.log(`${stocks.length} stocks loaded`);

});

app.get("/", (req,res)=>{
    res.send("Yahoo Finance Backend Running 🚀");
});


// STOCK API
app.get("/stock/:symbol", async(req,res)=>{

try{

const symbol = req.params.symbol.toUpperCase();

const yahooSymbol = symbol.includes(".")
? symbol
: `${symbol}.NS`;


const result = await yahooFinance.quote(yahooSymbol);



if(!result){
    return res.status(404).json({
        error:"Stock not found"
    });
}



res.json({

    name: result.shortName,

    symbol: result.symbol,

    price: result.regularMarketPrice,

    change: result.regularMarketChange,

    changePercent: result.regularMarketChangePercent,

    open: result.regularMarketOpen,

    high: result.regularMarketDayHigh,

    low: result.regularMarketDayLow,

    previousClose: result.regularMarketPreviousClose,

    volume: result.regularMarketVolume

});


}

catch(error){

console.log("ERROR:",error.message);


res.status(500).json({

error:"Unable to fetch stock"

});


}


});



// CHART API
app.get("/chart/:symbol", async(req,res)=>{

    try{

        const symbol = req.params.symbol.toUpperCase();

        const yahooSymbol = symbol.includes(".")
        ? symbol
        : `${symbol}.NS`;


        const result = await yahooFinance.chart(
            yahooSymbol,
            {
                period1:"2025-01-01",
                interval:"1d"
            }
        );


        const chartData = result.quotes.map(item=>({

            x:new Date(item.date).getTime(),

            y:item.close

        }));


        res.json(chartData);


    }catch(error){

        console.log(error);

        res.status(500).json({
            error:"Chart data not found"
        });

    }

});


app.get("/search", (req, res) => {

    const query = req.query.q?.toLowerCase();

    if (!query) {
        return res.json([]);
    }

    const result = stocks.filter(stock =>
        stock.symbol.toLowerCase().includes(query) ||
        stock.name.toLowerCase().includes(query)
    );

    res.json(result.slice(0, 20));

});


app.listen(5000,()=>{
    console.log("Server running on port 5000");
});