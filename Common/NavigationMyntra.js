import Link from "next/link";
import React from "react";
import Image from "next/image";
 
const Navigation=() =>{
    return (

        <div className='row bg-info bg-opacity-50'>
 <div className='container'>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <div className='col-6'>
      <Image src='/Myntra.png' alt="Logo" width={100} height={50}/>
      </div>
      <li class="nav-item active">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Courses">Shopping</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/facilities">facilities</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Contact">Contact</a>
      </li>
    </ul>
  </div>
  <i class="fab fa-facebook-f"></i>
  <div>
    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
    <span class="input-group-text border-0" id="search-addon">
     <i class="fas fa-search"></i>
    </span>

  </div>


</nav>
</div>
        </div>

      )

}
export default Navigation