import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "75vh" }}></main>
      <Footer />
    </div>
  );
}

export default Layout;
