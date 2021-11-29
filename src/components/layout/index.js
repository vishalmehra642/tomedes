import React from "react";
import Header from "./header";
import Footer from "components/layout/footer/index";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}
