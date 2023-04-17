import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const AuthRoute = ({ component: Component, path, exact }) => {
  const loggedIn = useSelector((state) => !!state.session.user);

  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        !loggedIn ? <Component {...props} /> : <Redirect to="/profile" />
      }
    />
  );
};

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const loggedIn = useSelector((state) => !!state.session.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
