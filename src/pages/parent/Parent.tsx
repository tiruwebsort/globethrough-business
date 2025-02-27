import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Parent = () => {
  return (
    <div className="min-h-[100vh] mx-auto flex flex-col justify-between">
      <Navbar />
      <main className="flex py-5 min-h-[100vh] ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Parent;
