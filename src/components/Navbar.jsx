import React from 'react'
import Image from 'next/image'
// import logo from '../assets/logoBlackBG.png'
import logoTransparent from '../assets/logoTransparent.png'
import logo from '../assets/logo.png'
import styles from '../styles/Navbar.module.css'
import { SearchIcon } from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'
import { MdShoppingCart, MdAccountCircle} from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
// The default icon size is 1em (16px)
const runClick = () =>{
  console.log('i am clicked');
}
let NextImage = Image
const Navbar = () => { 
  return (
    <div>
        <nav className=
        {styles.nav}
        >
          <div className={`${styles.navItem} ${styles.logo}`}>
            <a href="/">  
            <NextImage className={styles.brandLogo} src={logoTransparent} alt="brand logo"/>
            </a>
          </div>
          <div className={styles.navItem+" xyz"}>
            <div className={styles.searchBar}>
              <input className={styles.searchInput} placeholder='search for products'></input>
            <div>
              <button onClick={runClick}>

              <SearchIcon  className={styles.SearchIcon}/>
              </button>
            </div>
            </div>
          </div>
          <div className={styles.navItem+" xyz"}>
            <div className={styles.iconBox}>
              <a className={`${styles.cart}`} href="/cart">
              <Icon as={MdShoppingCart} boxSize={6}/>
              </a>
              <a className={`${styles.wishlist}`} href="/wishlist">
              <Icon as={AiOutlineHeart} boxSize={6}/>
              </a>
              <a className={`${styles.account}`} href="/">
              <Icon as={MdAccountCircle} boxSize={{base: '7', md: '6', lg: '6'}}/>
              </a>
            </div>
          </div>

        </nav>
    </div>
  )
}

export default Navbar