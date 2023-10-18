import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import SocialBar from "./Components/SocialBar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <SocialBar />
      <Footer />
    </>
  );
}

export default App;
