import Image from 'next/image'
import Link from "next/link";
import styles from '../styles/Header.module.scss';
import logo from '../public/Myntra.png'

export default function Header() {
     return (
      <>
      <header className={styles.header}>
      <div className={styles.header__logo}>
      <Image src='/Myntra.png' alt="Logo" width={100} height={50}/>
          <h1 className={styles.header__title}>Online Shopping Site</h1>
      </div>
      <div   className={styles.header__Rig}><Link className="btn btn-sm btn-outline-secondary m-1" href="/Registration">Registration</Link>
              <Link className="btn btn-sm btn-outline-secondary m-1" href="/Login">Login</Link>
            <Link className="btn btn-sm btn-outline-secondary m-1" href="#">Logout</Link>
 </div>
            </header>

 </>
      )

}