import SignupForm from "../SessionForms/SignupForm"
import LoginForm from "../SessionForms/LoginForm"

const LoggedOutSplashPage = () => {
    return(
        <> 
            <SignupForm/>
            <br></br>
            <LoginForm/>
            <h1>Logged Out Testing</h1>
        </>
    )
}

export default LoggedOutSplashPage