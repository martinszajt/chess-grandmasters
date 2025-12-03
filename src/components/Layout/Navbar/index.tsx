"use client";

import React from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";

export default function Navbar() {
  return (
    <Menubar start={[<Button label="Home" key="home" onClick={() => {}} />]} />
  );
}
