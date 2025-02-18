"use client";

import { Footer } from "flowbite-react";
import React from 'react';
import { Link } from "react-router-dom";

function AppFooter() {
  return (
    <div className="bg-pink-400">
      <Footer className="bg-pink-400 max-w-7xl mx-auto font-bannerFont " container>
    <Footer.Copyright className="text-white/90" href="#" by="marriageBD | Ahanaf Mubasshir" year={2025}/>
    <Footer.LinkGroup>
      <Footer.Link >
<Link className="text-white/90" to='/aboutUs'>About</Link>
      </Footer.Link>
     

      <Footer.Link>
        <Link className="text-white/90" to='/contactUs'>
        Contact
        </Link>
      </Footer.Link>
    </Footer.LinkGroup>
  </Footer>
    </div>
  )
}

export default AppFooter
