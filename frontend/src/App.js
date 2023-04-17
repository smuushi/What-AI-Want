
import { Redirect, Switch } from "react-router-dom";
// import NavBar from "./components/NavBar/NavBar";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import SplashPage from "./components/SplashPage/SplashPage";
import { getCurrentUser } from "./store/session";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import NavIndex from "./components/NavBar/NavIndex";

function App() {
  const loggedIn = useSelector(state=>!!state.session.user)
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false);

  let redirect;

  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

if (!loggedIn){
  redirect = <Redirect to = '/'/>
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
      <Route path = '/'>
        <Redirect to = '/'/>
        <SplashPage/>
      </Route>
      </Switch>
    </>
  )
}

export default App
