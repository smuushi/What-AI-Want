import React, {useState,createContext} from 'react'
import { Modal } from '../../context/Modal'
import Upload from '../Utils/Upload'



const ModalContext = createContext()

export {ModalContext}

function EditAvModal(){
    const [showModal,setShowModal] = useState(false)

    const handleClick = (e)=>{
        e.preventDefault();
        setShowModal(true)
    }

    return(
        <>
            <button onClick={handleClick} id = 'editPhotoButton'>
                <i className="fa-solid fa-camera-retro"></i>
            </button>
            {showModal &&(
                <Modal>
                <i className="fa-solid fa-xmark removelistModal " onClick={()=>setShowModal(false)}></i>
                <Upload/>
                </Modal>
            )}
        </>
    )
}

export default EditAvModal