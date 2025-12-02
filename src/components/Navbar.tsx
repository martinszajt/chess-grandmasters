import React from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";

const Navbar = () => {
  return (
    <Menubar start={[<Button label="Home" key="home" onClick={() => {}} />]} />
  );
};

export default Navbar;
