import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">

      <Sidebar />

      <div className="flex-1 ml-72">

        <Navbar />

        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
}

export default Layout;