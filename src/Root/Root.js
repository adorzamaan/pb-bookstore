import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <div>
        <footer className="text-center py-5">
          <p>
            Copyright &copy; 2022 all right reserved by{" "}
            <a href="https://github.com/adorzamaan" className="text-blue-600">
              Ador Zamaan
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Root;
