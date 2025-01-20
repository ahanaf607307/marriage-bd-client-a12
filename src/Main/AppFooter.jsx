"use client";

import { Footer } from "flowbite-react";
import React from 'react';
import { Link } from "react-router-dom";

function AppFooter() {
  return (
    <Footer container>
    <Footer.Copyright href="#" by="marriageBD | Ahanaf Mubasshir" year={2025}/>
    <Footer.LinkGroup>
      <Footer.Link >
<Link to='/aboutUs'>About</Link>
      </Footer.Link>
     

      <Footer.Link>
        <Link to='/contactUs'>
        Contact
        </Link>
      </Footer.Link>
    </Footer.LinkGroup>
  </Footer>
  )
}

export default AppFooter
