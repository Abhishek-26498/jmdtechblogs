import React, { useState } from 'react'
import Link from "next/link"
import styles from '/styles/Navbar.module.css'
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  let menu
  let maskmenu

  if (open) {
    menu =
      <div className={styles.mobileNav}>
        <div className={styles.close}>
          <h1>JMD Blogspot</h1>
          <h2 onClick={() => setOpen(false)}>X</h2>
        </div>
        <ul>
          <li onClick={() => setOpen(false)} >
            <Link href="/"><a><li >Home</li></a></Link>
            <Link href="/about"><a><li>About</li></a></Link>
            <Link href="/blog"><a><li>Blog</li></a></Link>
            <Link href="/contact"><a><li>Contact</li></a></Link>
          </li>
        </ul>

      </div>
    maskmenu =
      <div className={styles.mask}>

      </div>

  }
  return (
    <>
      <div className={styles.mainContainer}>

        <GiHamburgerMenu className={styles.menu}
          onClick={() => setOpen(true)}
        />
        {maskmenu}
        {menu}

        <div className={styles.mainNav} >

          <ul>
            <Link href="/"><a><li>Home</li></a></Link>
            <Link href="/about"><a><li>About</li></a></Link>
            <Link href="/blog"><a><li>Blog</li></a></Link>
            <Link href="/contact"><a><li>Contact</li></a></Link>
          </ul>

        </div>
      </div>
    </>
  )
}

export default Navbar