import { Outlet } from "react-router-dom";
import Header from "./components/Header";
// import React from "react";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      footer
    </div>
  );
};

export default App;
