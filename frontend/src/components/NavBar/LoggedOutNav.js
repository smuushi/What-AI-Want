import SignInUpModal from "./SignInUpModal"

const LoggedOutNav = ()=>{
    let login = 'login'
    let signUp = 'signUp'

    return(
        <><div className="loggedOutNav">
            <div id = 'signup'>
                <p>Make your character Today!</p>
                <div id = 'userAuthButtons'>
                <SignInUpModal type = {signUp}/>
                <SignInUpModal id = 'login' type = {login}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default LoggedOutNav