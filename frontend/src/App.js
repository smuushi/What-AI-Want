
import { Redirect, Switch } from "react-router-dom";
// import NavBar from "./components/NavBar/NavBar";
import LoggedInSplashPage from "./components/SplashPage/LoggedInSplashPlage";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import LoggedOutSplashPage from "./components/SplashPage/LoggedOutSplashPage";
import { getCurrentUser } from "./store/session";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import NavIndex from "./components/NavBar/NavIndex";

function App() {
  const loggedIn = useSelector(state=>!!state.session.user)
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false);

  let splash;
  let redirect;

  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

  if (loggedIn){
    
    splash = <LoggedInSplashPage/>
    redirect = <Redirect to = '/'/>
    
  }else if (!loggedIn){
    splash = <>
      <Redirect to = '/welcome'/>
      <LoggedOutSplashPage/>
    </>
    redirect = <Redirect to = '/welcome'/>
      
      
  }

  
  return loaded && (
    <>
     
       <NavIndex/>
      <Switch>
        <Route exact path = '/profile'>
          <p> PROFILE testing</p>
          {redirect}
        </Route>
        <Route exact path = '/maike'>
          <p> MAIKE TESTING</p>
          {redirect}
        </Route>
      <Route exact path = '/welcome'>
        <LoggedOutSplashPage/>
        {redirect}
      </Route>
      <Route path = '/'>
        <Redirect to = '/'/>
        {splash}
      </Route>
      </Switch>
    </>
  )
}

export default App
