'use client'

import { createContext, ReactNode, useState, useLayoutEffect, useEffect} from "react"

export const NavContext = createContext<INav|null>(null);


export default function NavProvider({children}:{children:ReactNode}) {
    
    const [isOpen, setIsOpen] = useState(false); 
    useToggleBody(isOpen)

	function toggleBurger():void {
		setIsOpen(!isOpen);
	}

     const contextValue = {
        isOpen,
        toggleBurger
    };


    return (
        <NavContext value={contextValue} >
            {children}
        </NavContext>
    )
}

type INav = {
    isOpen: boolean;
    toggleBurger: () => void;
}

function useToggleBody(isOpen: boolean) {
    useLayoutEffect(() => {
        const body = document.querySelector('body');

        if (isOpen) {
            body?.classList.add('bodyOverlay');
        } else {
            body?.classList.remove('bodyOverlay');
        }
        return () => {};
    },[isOpen]);
}