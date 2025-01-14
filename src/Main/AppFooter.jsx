"use client";

import { Footer } from "flowbite-react";
import React from 'react';

function AppFooter() {
  return (
    <Footer container>
    <Footer.Copyright href="#" by="marriageBD | Ahanaf Mubasshir" year={2025}/>
    <Footer.LinkGroup>
      <Footer.Link href="#">About</Footer.Link>
      <Footer.Link href="#">Privacy Policy</Footer.Link>
      <Footer.Link href="#">Licensing</Footer.Link>
      <Footer.Link href="#">Contact</Footer.Link>
    </Footer.LinkGroup>
  </Footer>
  )
}

export default AppFooter
