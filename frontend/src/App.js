
import { Redirect, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import SplashPage from "./components/SplashPage/SplashPage";
import { getCurrentUser } from "./store/session";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import NavIndex from "./components/NavBar/NavIndex";
import MaikeForm from "./components/Maike/MaikeForm";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Upload from "./components/Utils/Upload";


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





  return (
    loaded && (
      <>
        <NavIndex />
        <Switch>
          <Route exact path="/profile">
            <p> PROFILE testing</p>
            {redirect}
          </Route>
          <Route exact path="/maike">
            <MaikeForm />
            {redirect}
          </Route>
          {/* sara */}
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/team">
            <Team />
          </Route>
        <Route exact path="/upload">
          <Upload/>
        </Route>
          {/* sara */}
          <Route path="/">
            <Redirect to="/" />
            <SplashPage />
          </Route>
        </Switch>
      </>
    )
  );
}

export default App
