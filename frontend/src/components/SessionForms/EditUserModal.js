import React, {useState,createContext} from 'react'
import { Modal } from '../../context/Modal'
import { useDispatch } from 'react-redux'
import EditUserForm from './EditUserForm'


const ModalContext = createContext()

export {ModalContext}

function EditUserModal(){
    const [showModal,setShowModal] = useState(false)
    const dispatch = useDispatch()
   

    const handleClick = (e)=>{
        e.preventDefault();
        setShowModal(true)
    }

    return(
        <>
            <button onClick={handleClick} id  ='editUserButton'>Edit</button>
            {showModal &&(
                <Modal>
                <i className="fa-solid fa-xmark removelistModal " onClick={()=>setShowModal(false)}></i>
                <EditUserForm/>
                </Modal>
            )}
        </>
    )
}

export default EditUserModal