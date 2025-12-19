'use client';

import CatWalk from '../svg/CatWalk';
import styles from './header.module.css';
import { useHideOnScroll } from 'src/hooks/useHideOnScroll';
import Burger from './Burger';
import { use } from 'react';
import { NavContext } from 'src/context/Navcontext';
import NavComponent from './NavComponent';


export default function Header() {
	const navToggle = use(NavContext);

	const hidden = useHideOnScroll({
		threshold: 66, // starts hiding after 40px
		mobileOnly: false, // hide only on mobile
	});

	return (
		<header className={`${styles.navWrap} `}>
			<div
				className={`${styles.navbarHeader} ${hidden ? styles.navHidden : ''}`}
			>
				<nav className={styles.navBar}>
					{/* left this class unpurpose to remember this style also exist 
					Con in class names means container*/}
					<div className={styles.burgerCon}>
						<Burger
							isOpen={navToggle?.isOpen}
							toggleBurger={navToggle?.toggleBurger}
						/>
						<div className={styles.navMenu}>
							<div className={styles.navLinks}>
								<NavComponent />
							</div>
							<div className={styles.donateBtnWrap}>
								<button type='button'>DONATE</button>
							</div>
						</div>
					</div>
					<div className={styles.svgLogo}>
						<CatWalk />
					</div>
				</nav>
			</div>
			<div
				className={navToggle?.isOpen ? styles.navShadow : ''}
				aria-hidden='true'
				onClick={navToggle?.toggleBurger}
			></div>
		</header>
	);
}

// effects and other function
