import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import SocialBar from "./Components/SocialBar";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <SocialBar />
    </>
  );
}

export default App;
