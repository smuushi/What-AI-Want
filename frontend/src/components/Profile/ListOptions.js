import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import RemoveListModal from "./removeListModal";

const ListOptions = (props)=>{
    const [showMenu,setShowMenu] = useState(false)
    const history = useHistory()
    const list = props.list 
   
    const openMenu = ()=>{
        if (showMenu) return;
        setShowMenu(true)
        console.log(list)
    }

    useEffect(()=>{
        if (!showMenu) return;
        const closeMenu = ()=>{
            setShowMenu(false)
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
            <ul key={JSON.stringify(displayMenu + list)} id = {displayMenu}>
                <li key={JSON.stringify(list)}>
                    <button id = 'updateListButton' onClick={()=>history.push(`/edit/${list?._id}`)}>Update List</button>
                </li>
                <li key={JSON.stringify(list) + "399843"}>
                    <RemoveListModal list = {list}/>
                </li>
            </ul>

        </>
    )
}

export default ListOptions
