import SignInUpModal from "./SignInUpModal"

const LoggedOutNav = ()=>{
    let login = 'login'
    let signUp = 'signUp'

    return(
        <><div className="loggedOutNav">
            <div id = 'signup'>
                <p>Make your character Today!</p>
                <SignInUpModal type = {signUp}/>
            </div>
                <SignInUpModal id = 'login' type = {login}/>
        </div>
        </>
    )
}

export default LoggedOutNav