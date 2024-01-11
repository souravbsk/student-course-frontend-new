import Footer from "@/Shared/Footer/Footer";
import Header from "@/Shared/Header/Header";
import React from "react";

const layout = ({ children }) => {
  return (
    <body>
      <Header></Header>
      {children}
      <Footer></Footer>
    </body>
  );
};

export default layout;
