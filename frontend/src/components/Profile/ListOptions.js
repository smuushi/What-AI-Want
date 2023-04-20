import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import RemoveListModal from "./removeListModal";

const ListOptions = (props)=>{
    const [showMenu,setShowMenu] = useState(false)
    const history = useHistory()
    const list = props.list 

    const openMenu = (e)=>{
        e.stopPropagation();
        if (showMenu) return;
        // setTimeout(()=>{setShowMenu(()=>!showMenu)},0)
        setShowMenu(true)
    }

    useEffect(()=>{
        if (!showMenu) return;
    
        const closeMenu = ()=>{
            setShowMenu(false);
        }
        document.addEventListener('click',closeMenu)
        return ()=>document.removeEventListener("click",closeMenu)
    },[showMenu]);

    let displayMenu;
    if (showMenu){
        displayMenu = 'listOptions'
    }else{
        displayMenu = 'hideMenu'
    }
   
    return(
        <>
            <div id = 'listOptionsContainer'>
                <button id = 'openlistDropdown' onClick={openMenu}>Options</button>
            </div>
            <ul id = {displayMenu}>
                <li>
                    <button id = 'updateListButton' onClick={()=>history.push(`/edit/${list?._id}`)}>Update List</button>
                </li>
                <li>
                    <RemoveListModal list = {list}/>
                </li>
            </ul>

        </>
    )
}

export default ListOptions
