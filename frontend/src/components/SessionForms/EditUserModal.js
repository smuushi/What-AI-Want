import React, {useState,createContext} from 'react'
import { Modal } from '../../context/Modal'
import EditUserForm from './EditUserForm'


const ModalContext = createContext()

export {ModalContext}

function EditUserModal(){
    const [showModal,setShowModal] = useState(false)

   

    const handleClick = (e)=>{
        e.preventDefault();
        setShowModal(true)
    }

    return(
        <>
            <button onClick={handleClick} id  ='editUserButton'><i className="fa-solid fa-user-pen"></i></button>
            {showModal &&(
                <Modal>
                <i className="fa-solid fa-xmark removelistModal " onClick={()=>setShowModal(false)}></i>
                <EditUserForm setShowModal = {setShowModal}/>
                </Modal>
            )}
        </>
    )
}

export default EditUserModal