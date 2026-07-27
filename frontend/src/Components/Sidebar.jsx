import {
  FaChartLine,
  FaStar,
  FaChartBar,
  FaNewspaper,
  FaCog
} from "react-icons/fa";

const menu = [
  { icon: <FaChartLine />, name: "Dashboard" },
  { icon: <FaStar />, name: "Watchlist" },
  { icon: <FaChartBar />, name: "Market" },
  { icon: <FaNewspaper />, name: "News" },
  { icon: <FaCog />, name: "Settings" }
];

function Sidebar() {
  return (
    <aside className="w-72 h-screen fixed bg-slate-950 border-r border-slate-800">

      <div className="p-8">

        <h1 className="text-3xl font-bold text-blue-400">

          📈 StockPro

        </h1>

        <p className="text-slate-400 mt-2">

          Indian Stock Dashboard

        </p>

      </div>

      <div className="px-4 mt-10">

        {menu.map((item) => (

          <div
            key={item.name}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-800 transition cursor-pointer mb-3"
          >

            <div className="text-blue-400">

              {item.icon}

            </div>

            <span>

              {item.name}

            </span>

          </div>

        ))}

      </div>

    </aside>
  );
}

export default Sidebar;