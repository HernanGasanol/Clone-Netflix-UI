import React from "react";
import NavBar from "./Nav/NavBar";
import { useState, useEffect } from "react";

const Layout = ({ children }) => {
  const [hightScroll, setHightscroll] = useState(0);

  const handleScroll = () => {
    let position = window.scrollY;
    setHightscroll(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [hightScroll]);

  return (
    <>
      <NavBar positionScroll={hightScroll} />
      {children}
    </>
  );
};

export default Layout;
