'use client'
import styles from "./side-bar.module.css"
import {  use } from 'react';
import { NavContext } from 'src/context/Navcontext';

export default function SideBar() {
    const navToggle = use(NavContext)

    // 1. Safety Check: Handle case where context might be null (if used outside provider)
   /*  if (!navToggle) {
        console.error("SideBar used outside of NavProvider.");
        return null;
    }

    if (!navToggle.isReady) {
        return null; 
    } */

    return (
    <div className={`${styles.sideBarCon} ${navToggle?.isOpen?styles.sideBarConOpen:""}`}>
      
    </div>
  )
}
