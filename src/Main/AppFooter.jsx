"use client";

import { Footer } from "flowbite-react";
import React from 'react';
import { Link } from "react-router-dom";

function AppFooter() {
  return (
    
      <Footer className="bg-pink-400   font-bannerFont rounded-none" container>
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

  )
}

export default AppFooter
