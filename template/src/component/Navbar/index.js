import React, { Component } from 'react'
import {Link  } from 'react-router-dom'
import  { Navbarsection , Logosection ,Logotext,Ullist , Listitem , Anchor } from './style.js'


const Navbar = () => {
  return (
    <div>
      
        <Navbarsection>
            
            <div className="container">
                
                <Logosection>
                    <Logotext>Ultra Profile</Logotext>
                </Logosection>
                
         
                
                <Ullist>
                  <Listitem>  <Link  to='/'>Home</Link></Listitem>
                  <Listitem > <Anchor href='#'>Work</Anchor></Listitem>
                  <Listitem> <Anchor href='#' >PortfoLinko</Anchor></Listitem>
                  <Listitem> <Anchor href='#' >Resume</Anchor></Listitem>
                  <Listitem> <Anchor href='#'>About</Anchor></Listitem>
                  <Listitem> <Link  to='/Contact'>Contact</Link></Listitem>
                
                </Ullist>
                
            </div>
            
        </Navbarsection>
    </div>
  )
}

export default Navbar;
