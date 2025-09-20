import React from "react";
import Header from "../components/Header";
import LeftAside from "../components/HomeLayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 ">
        <aside className="md:col-span-3">
          {" "}
          <LeftAside />{" "}
        </aside>
        <section className="md:col-span-6">
          {" "}
          <Outlet />{" "}
        </section>

        <aside className="md:col-span-3">
          {" "}
          <RightAside />{" "}
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
