import Link from "next/link";
import React from "react";
 
const NavBar=() =>{
    return (
        <div className='row bg-info bg-opacity-50'>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Courses">Courses</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/facilities">facilities</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Contact">Contact</a>
      </li>
    </ul>
  </div>
</nav>
    
        </div>
      )

}
export default NavBar