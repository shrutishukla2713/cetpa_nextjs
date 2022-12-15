import React from 'react';
import {useRouter} from 'next/router';
import Link from "next/link";

const Head3 = () => {
  const router = useRouter();

  const logoutFn = () => {
    localStorage.removeItem('loginStatus');
    localStorage.removeItem('name');
    localStorage.removeItem('username');
    router.reload('/Products');
  }
  return (
    <div className='col-3'>
         <Link className="btn btn-sm btn-outline-secondary m-1" href="/login">Login</Link>
         <button onClick={logoutFn}>Logout</button>
    </div>
  )
}

export default Head3