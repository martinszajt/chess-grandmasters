"use client";

import React from "react";
import { Menubar } from "primereact/menubar";
import Link from "next/link";

const Navbar = () => {
  return (
    <Menubar
      start={[
        <Link href="/" key="home">
          Hola
        </Link>,
      ]}
    />
  );
};

export default Navbar;
