import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import styles from './layout.module.css'
import useDarkMode from '../hooks/useDarkMode'
import { Switch } from "@chakra-ui/react"
import Image from 'next/image'
import { HiMoon, HiSun } from 'react-icons/hi';
import { AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import { FaDev} from 'react-icons/fa';

const Layout = ({children}) => {
  const [showMenu, setShowMenu] = useState(false)
  const { theme, toggleTheme } = useDarkMode()


  return (
    <div style={{background: theme === 'dark' ? '#0B0A2B' : '#E7E7E7',
    color: theme === 'dark' ? '#fff' : '#000',
    }}>
      <div className={styles.layout}>
        <nav className={styles.nav}
          style={{background: theme === 'dark' ? '#5A5A5A' : '#808080',
          color: '#fff',}}>
          <div className={styles.header}>
            {/* <div className={styles.imgContainer}>
              <Image className={styles.profile} src="/alligator.png" width="200px" height="200px"/>
            </div>
            <h1 className={styles.title}><Link href="/">Luke Kim</Link></h1>
            <div className={styles.logoGroup}>
              <a href="https://www.linkedin.com/in/luke-wooseok-kim/"><AiFillLinkedin size={30}/> </a>
              <a href="https://github.com/luke9kim8"><AiFillGithub size={30} /> </a>
              <a href="https://dev.to/luke9kim8"><FaDev size={30}/></a>
            </div> */}
            {theme === 'dark' ? 
              <button 
              className={
                ` ${styles['menu']}
                ${styles['hamburger-dark']} 
                ${styles['hamburger-dark--slider']} 
                ${showMenu && styles['is-active']}`} 
              type="button"
              onClick={() => {setShowMenu(!showMenu)}}>
              <span className={styles['hamburger-dark-box']}>
                <span className={styles["hamburger-dark-inner"]}
                ></span>
              </span>
              </button> :
              <button 
                className={
                  ` ${styles['menu']}
                  ${styles['hamburger']} 
                  ${styles['hamburger--slider']} 
                  ${showMenu && styles['is-active']}`} 
                type="button"
                onClick={() => {setShowMenu(!showMenu)}}>
                <span className={styles['hamburger-box']}>
                  <span className={styles["hamburger-inner"]}
                  ></span>
                </span>
              </button>  }
            {
            <div className={`${showMenu ? styles['menu-container-active'] : styles['menu-container']}`}>
              <div className={styles.imgContainer}>
                <Image className={styles.profile} src="/alligator.png" width="200px" height="200px"/>
              </div>
              <h1 className={styles.title}><Link href="/">Luke Kim</Link></h1>
              <div className={styles.logoGroup}>
                <a href="https://www.linkedin.com/in/luke-wooseok-kim/"><AiFillLinkedin size={30}/> </a>
                <a href="https://github.com/luke9kim8"><AiFillGithub size={30} /> </a>
                <a href="https://dev.to/luke9kim8"><FaDev size={30}/></a>
              </div>
              <button
                className={styles.themeBtn}
                onClick={toggleTheme}
                >
              {(theme === 'dark') ? <HiSun size={40}/>: <HiMoon size={40}/>}
              </button>
              <ul className={styles.navButtonGroup}>
                <li className={styles.navButton} 
                    onClick={() => setShowMenu(!showMenu)}>
                      <Link href="/" >/ About</Link>
                </li>
                <li className={styles.navButton} 
                    onClick={() => setShowMenu(!showMenu)}>
                    <Link href="/blog" >/ Blog</Link>
                </li>
                <li className={styles.navButton} 
                    onClick={() => setShowMenu(!showMenu)}>
                    <Link href="/" >/ Projects</Link>
                </li>
              </ul>
            </div>}
          
            
            
            
          </div>
        </nav>

        <div className={styles.contentPage}>
          <div className={styles.contentSpacer}>
            {/* empty div to space out content from nav bar */}
          </div>
          <div className={styles.children}
            style={{background: theme === 'dark' ? '#0B0A2B' : '#E7E7E7',}}>
            { children}
            <footer className={styles.footer}>
              <p>Created by Luke Kim</p>
            </footer>
          </div>
          
        </div>
      </div>
      
      
    </div>
  )
}

export default Layout