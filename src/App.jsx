import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <h1 className="text-red-600">Vite + React</h1>
      <Outlet />
    </>
  );
}

export default App;
