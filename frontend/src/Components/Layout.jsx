import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Desktop */}
      <div className="hidden lg:block fixed left-0 top-0 h-screen w-72">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="lg:ml-72">

        <Navbar />

        <main className="p-4 md:p-8 bg-slate-950 min-h-screen">
          {children}
        </main>

      </div>

    </div>
  );
}

export default Layout;