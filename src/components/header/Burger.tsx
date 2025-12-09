'use client'

import styles from "./burger.module.css"

interface BurgerProps {
  isOpen?: boolean;
  toggleBurger?: () => void;
}

export default function Burger({isOpen, toggleBurger}: BurgerProps) {
  

  return (
    // We add the 'open' class to the wrapper when state is true
    <button className={`${styles.svgBurgerBtn} ${isOpen ? styles.open : ''}`} 
      title="Toggle navigation menu"
      type='button'
    >
        <svg viewBox="0 0 60 50" onClick={toggleBurger}>
          
          {/* WE KEEP THESE 3 LINES ALWAYS.
             We don't remove them. We just move them with CSS.
          */}
          
          {/* Top Line */}
          <line className={styles.top} x1="0" y1="15" x2="45" y2="15" />
          
          {/* Middle Line */}
          <line className={styles.middle} x1="0" y1="25" x2="45" y2="25" />
          
          {/* Bottom Line */}
          <line className={styles.bottom} x1="0" y1="35" x2="45" y2="35" />

        </svg>
    </button>
  )
}