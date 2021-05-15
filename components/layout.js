import React, {useState} from 'react'
import Link from 'next/link'
import styles from './layout.module.css'
import useDarkMode from '../hooks/useDarkMode'
import { Switch } from "@chakra-ui/react"


const Layout = ({children}) => {
  const [showMenu, setShowMenu] = useState(false)
  const { theme, toggleTheme } = useDarkMode()
  console.log(theme)
  return (
    <div style={{background: theme === 'dark' ? '#000' : '#fff',
    color: theme === 'dark' ? '#fff' : '#000',
    }}>
      <div className={styles.layout}>
        <nav className={styles.nav}>
          <div className={styles.header}>
            <h1 className={styles.title}><Link href="/">luke.lcim</Link></h1>
            <Switch size="lg" 
              className={styles.themeBtn}
              onChange={toggleTheme}
              colorScheme="gray"
              />
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
              <ul className={styles.navButtonGroup}>
                <li className={styles.navButton} 
                    onClick={() => setShowMenu(!showMenu)}>
                      <Link href="/about" >About</Link>
                </li>
                <li className={styles.navButton} 
                    onClick={() => setShowMenu(!showMenu)}>
                    <Link href="/blog">Blog</Link>
                </li>
                <li className={styles.navButton} 
                    onClick={() => setShowMenu(!showMenu)}>
                  <Link href="/resume">Resume</Link>
                </li>
                <li className={styles.navButton} 
                    onClick={() => setShowMenu(!showMenu)}>
                      <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>}
          </div>
        </nav>
        <div className={styles.children}>
          { children}
        </div>
      </div>
      <footer className={styles.footer}>
        <p>Created by Luke Kim</p>
      </footer>
      
    </div>
  )
}

export default Layout