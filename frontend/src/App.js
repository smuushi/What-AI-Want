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
import Profile from "./components/Profile/Profile";

function App() {
  const loggedIn = useSelector((state) => !!state.session.user);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  let redirect;

  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

  if (!loggedIn) {
    redirect = <Redirect to="/" />;
  }

  return (
    loaded && (
      <>
        <NavIndex />
        <Switch>
          <Route exact path="/profile">
            <Profile />
            {redirect}
          </Route>
          <Route exact path="/maike">
            <MaikeForm />
            {redirect}
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/">
            <Redirect to="/" />
            <SplashPage />
          </Route>
        </Switch>
      </>
    )
  );
}

export default App;
