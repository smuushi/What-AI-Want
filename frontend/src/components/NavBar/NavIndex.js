import { useSelector } from "react-redux"
import LoggedInNav from "./LoggedInNav";
import LoggedOutNav from "./LoggedOutNav";

const NavIndex = ()=>{
    const loggedIn = useSelector(state=>!!state.session.user)
    let navComponent;
    if (loggedIn){
        navComponent = <LoggedInNav/>
    }else{
        navComponent = <LoggedOutNav/>
    }
    return (
        <div>
         <p>WHATAIWANT</p>
        {navComponent}
        </div>
        
    )
}

export default NavIndex 