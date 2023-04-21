import React, { useState,createContext } from 'react';
import { Modal } from "../../context/Modal";
import LoginForm from "../SessionForms/LoginForm";
import SignupForm from "../SessionForms/SignupForm";
// import { useSelector } from "react-redux";
import './signInUp.css'

const ModalContext = createContext()

export {ModalContext}

function SignInUpModal(props) {
    const [showModal, setShowModal] = useState(false);

    const handleClick = (e)=>{
        e.preventDefault();
        setShowModal(true);
      }
      const type = props.type
      let buttonText;
      let formType;

      if (type === 'login'){
        buttonText = 'Log In'
        formType = <LoginForm/>
    }else{
        buttonText = 'Get Started'
        formType = <SignupForm/>
    }
    let newButton;
    if (props.page === 'splash'){
        newButton = <div onClick={handleClick} className="intro_button">Join Now!</div>
    }else{
        newButton = <button onClick={handleClick}>{buttonText}</button>
    }
   
    return(
        <>
            <div>
                {newButton}
                {showModal && (
                <Modal onClose={()=> setShowModal(false)}>
                <i className="fa-solid fa-xmark modalClose" onClick={()=>setShowModal(false)}></i>
                    {formType}
                </Modal>
                )}
            </div>
           
        </>
    );
}

export default SignInUpModal;