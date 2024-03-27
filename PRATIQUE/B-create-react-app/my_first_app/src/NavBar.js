import React from 'react'


function NavBar(){
  const pages = [
    "home",
    "blog",
    "pics",
    "art",
    "shop",
    "about",
    "contact",
  ];
  const navLinks = pages.map((page) =>{
    return <a href={"/" + page}>&nbsp;{page}</a>
    //1er tour de boucle map (home)=> 
    //<a href= "/home"> home</a>
    //&nbsp = " "
  })

  return <nav>{navLinks}</nav>
}

export default NavBar;
