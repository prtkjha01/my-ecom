import React from 'react'
import Image from 'next/image'
// import logo from '../assets/logoBlackBG.png'
import myEcom from '../assets/logoTransparent.png'
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
  // const accha = () => {
  //   console.log(process.env.NEXT_PUBLIC_VAR)
  // }
  // const navItems = [
  //   {
  //     id : 1,
  //     title : 'item 1',
  //     redirect: '/testRoute'
  //   },
  //   {
  //     id : 2,
  //     title : 'item 2',
  //     redirect: '/testRoute'
  //   },
  //   {
  //     id : 3,
  //     title : 'item 3',
  //     redirect: '/testRoute'
  //   },
  //   {
  //     id : 4,
  //     title : 'item 4',
  //     redirect: '/testRoute'
  //   }
  // ]  
  return (
    <div>
        {/* <div onClick={accha} className="text-4xl text-center font-bold underline">
            Navbar ! {process.env.NEXT_PUBLIC_VAR}
        </div> */}
        <nav className=
        {styles.nav}
        >
          {/* {
            navItems.map((navItem,index)=>{
              return (
              <div className={styles.navItem+" xyz"} key={navItem.id}>
                <a href={navItem.redirect}>

                {navItem.title}
                </a>
                  
              </div>
              )
            })
          } */}
          <div className={styles.navItem+" xyz"}>
            <NextImage height={30} src={myEcom} alt="brand logo"/>
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
              <a href="/cart">
              <Icon as={MdShoppingCart} boxSize={6}/>
              </a>
              <a href="/wishlist">
              <Icon as={AiOutlineHeart} boxSize={6}/>
              </a>
              <a href="">
              <Icon as={MdAccountCircle} boxSize={6}/>
              </a>
            </div>
          </div>

        </nav>
    </div>
  )
}

export default Navbar