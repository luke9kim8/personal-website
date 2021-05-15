import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import styles from './layout.module.css'
import useDarkMode from '../hooks/useDarkMode'
import { Switch } from "@chakra-ui/react"


const Layout = ({children}) => {
  const [showMenu, setShowMenu] = useState(false)
  const { theme, toggleTheme } = useDarkMode()


  return (
    <div style={{background: theme === 'dark' ? '#000' : '#fff',
    color: theme === 'dark' ? '#fff' : '#000',
    }}>
      <div className={styles.layout}>
        <nav className={styles.nav}
          style={{background: theme === 'dark' ? '#4B0082' : '#808080',}}>
          <div className={styles.header}>
            <h1 className={styles.title}><Link href="/">Luke Kim</Link></h1>
            <Switch size="lg" 
              className={styles.themeBtn}
              onChange={toggleTheme}
              colorScheme="gray"
              isChecked={theme === 'dark'}
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
                      <Link href="/" >About</Link>
                </li>
                <li className={styles.navButton} 
                    onClick={() => setShowMenu(!showMenu)}>
                    <Link href="/blog">Blog</Link>
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
            style={{background: theme === 'dark' ? '#000' : '#fff',}}>
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