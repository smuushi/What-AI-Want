import { Redirect, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { getCurrentUser } from "./store/session";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import NavIndex from "./components/NavBar/NavIndex";
import MaikeForm from "./components/Maike/MaikeForm";
import Profile from "./components/Profile/Profile";
import Team from "./components/Team/Team";

import SplashExample from "./components/SplashExample";
import Footer from "./components/Footer/Footer";

import FinalAbout from "./components/About/About_Final";


import ScrollToTop from "./components/Utils/ScrollToTop";


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
        <ScrollToTop />
        <NavIndex />
        <Switch>
          <Route exact path="/profile">
            <Profile />
            {redirect}
          </Route>
          <Route exact path="/maike">
            <MaikeForm type={"Create"} />
            {redirect}
          </Route>
          {/* sara */}
          <Route exact path="/about">
            <FinalAbout/>
          </Route>






          <Route exact path="/edit/:listId">
            <MaikeForm type={"Edit"} />
          </Route>
          <Route exact path="/splash"></Route>
          <Route path="/">
            <Redirect to="/" />
            <SplashExample />
            {/* <SplashPage/> */}
          </Route>

        </Switch>
        <Footer />
      </>
    )
  );
}

export default App;
