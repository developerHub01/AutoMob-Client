import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import SocialBar from "./Components/SocialBar";
import Footer from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoaderCompo from "./Components/LoaderCompo";
import DarkModeSwitch from "./Components/DarkModeSwitch";

const App = () => {
  return (
    <>
      <Header />
      <div className="w-full mt-[85px]">
        <Outlet />
      </div>
      <SocialBar />
      <Footer />
      <LoaderCompo />
      <DarkModeSwitch />
      <ToastContainer />
    </>
  );
};

export default App;
