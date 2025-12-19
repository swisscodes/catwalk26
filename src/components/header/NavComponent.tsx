'use client';
import Link from "next/link"
import {use, useLayoutEffect, useState } from "react";
import { NavContext } from "src/context/Navcontext";
import styles from "./NavComponent.module.css";


const linkObjects:TLinkObject[] = [
    /* { href: "/", label: "Home", active:false, id:1} */
    { href: "about", label: "About Us", active:false, id:2},
    { href: "campaigns", label: "Campaigns", active:false, id:3 },
    { href: "gallery", label: "Gallery", active:false, id:4 },
    { href: "events", label: "Events", active:false, id:5 },
    { href: "contact", label: "Contact", active:false, id:6 },
]

type TLinkObject = {
    href: string;
    label: string;
    active: boolean;
    id:number;
}


export default function NavComponent() {

    const navToggle = use(NavContext);
    const [activeId, setActiveId] = useState<number | null>(null)

    useLayoutEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && navToggle?.isOpen) {
                navToggle?.toggleBurger();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [navToggle]);

    const handleLinkClick = (link:TLinkObject) => {
        
       setActiveId(link.id);

        // Only toggle (close) the menu if we are on a small screen
        // where the burger/sidebar is actually active.
        if (window.innerWidth <= 768 && navToggle?.isOpen) {
            navToggle?.toggleBurger();
        }
    };

  return (
        <ul>
            {linkObjects.map((link) => (
                <li key={link.href} className={`${activeId === link?.id ? styles.activeLink : ''}`}>
                    <Link href={link.href} onClick={() => handleLinkClick(link)}>{link?.label}</Link>
                </li>
            ))}	
        </ul>
  )
}
