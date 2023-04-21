import SignInUpModal from "./SignInUpModal";
import Logo from "./Logo";

const LoggedOutNav = () => {
  let login = "login";
  let signUp = "signUp";

  return (
    <>
      <div className="loggedOutNav">
        <div className="logged-out-logo">
          <Logo />
        </div>
        {/* <div id="signup">
          <p>Make your Aivatar Today!</p> */}
          <div id="userAuthButtons">
            <SignInUpModal type={signUp} />
            <SignInUpModal id="login" type={login} />
          </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default LoggedOutNav;
