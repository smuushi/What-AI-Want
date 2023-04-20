import React, {useState,createContext} from 'react'
import { Modal } from '../../context/Modal'
import { useDispatch } from 'react-redux'
import { deleteList } from '../../store/lists'

const ModalContext = createContext()

export {ModalContext}

function RemoveListModal(props){
    const [showModal,setShowModal] = useState(false)
    const dispatch = useDispatch()
    const list = props.list

    const handleClick = (e)=>{
        e.preventDefault();
        setShowModal(true)
    }

    const handleRemoveClick = (e)=>{
        e.preventDefault();
        dispatch(deleteList(list?._id)).then(()=>{setShowModal(false)})
    }

    return(
        <>
            <button onClick={handleClick} id  ='removeListButton'>Remove List</button>
            {showModal &&(
                <Modal>
                <div id = 'removeListContainer'>
                    <i className="fa-solid fa-xmark removelistModal " onClick={()=>setShowModal(false)}></i>
                    <div id= 'innerremoveList'>
                        <p>Permanently remove this list?</p>
                        <div id = "removeListbuttons">
                            <button onClick={()=>setShowModal(false)} id = 'cancelListRemove'>Cancel</button>
                            <button onClick={handleRemoveClick} id = 'confirmListRemove'>Remove</button>
                        </div>
                    </div>
                </div>
                </Modal>
            )}
        </>
    )
}

export default RemoveListModal