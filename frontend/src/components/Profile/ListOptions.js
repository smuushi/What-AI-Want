import { useState } from "react";
import { useEffect } from "react";

const ListOptions = (props)=>{
    const [showMenu,setShowMenu] = useState(false)
    const list = props.list 
    
    const openMenu = ()=>{
        if (showMenu) return;
        setShowMenu(true)
    }
    
    useEffect(()=>{
        if (!showMenu) return;
        const closeMenu = ()=>{
            setShowMenu(false)
        }
        document.addEventListener('click',closeMenu)
        return ()=>document.removeEventListener("click",closeMenu)
    })
}
