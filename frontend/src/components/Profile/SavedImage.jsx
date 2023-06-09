import { Modal } from "../../context/Modal";
import React, { useState,createContext } from 'react';
import './Collection.css'
import { useDispatch } from "react-redux";
import { deleteImage } from "../../store/images";
import MaikeModal from "../Maike/MaikeModal";


const ModalContext = createContext()

export {ModalContext}
export const SavedImage = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [showConfirm,setShowConfirm] = useState(false)
    const dispatch = useDispatch()
    const imageObj = props.imageObj;
    const imageUrl = imageObj?.tempUrl;

    const handleDownload = () =>{
        const link = document.createElement('a')
        link.href = imageUrl
        link.download = 'aIvatar.png';
        link.target = '_blank';
        link.click()
    }

    const handleClick = (e)=>{
        e.preventDefault();
        setShowModal(true);
      }

    const handleDeleteClick=(e)=>{
        e.preventDefault();
        e.stopPropagation()
        dispatch(deleteImage(imageObj?._id))
        setShowModal(false)
        setShowConfirm(false)
        
    }

    let presentingGender;
    let gender = imageObj?.prompts?.gender.toLowerCase()
    if (gender === 'boy' || gender === 'man'){
        presentingGender = 'Male Presenting'
    }else if (gender === 'girl' || gender === 'woman'){
        presentingGender = 'Female Presenting'
    }
    let button;
    if(showConfirm){
        button = <button
            onClick={handleDeleteClick} id = 'confirmDelete'>Confirm?</button> 
    }else{
        button= <button id = 'deleteShowImage'
            onClick={()=>{setShowConfirm(true)}}>Delete?</button>
    }

    const description=
    <div id='parameterContainer'>
    <h1>Preferences</h1>
    <p>Hair Color</p>
    <h2>{imageObj?.prompts.hairColor}</h2>
    <p>Clothing/Acc.</p>
    <h2>{imageObj?.prompts.clothingAccessory}</h2>
    <p>Gender</p>
    <h2>{presentingGender}</h2>
    <p>Background</p>
    <h2>{imageObj?.prompts.background}</h2>
    <p>Art-Style</p>
    <h2>{imageObj?.prompts.artStyle}</h2>
    <p>Website-Style</p>
    <h2>{imageObj?.prompts.websiteStyle}</h2>
    </div>



    return (
        <>
            <li onClick={handleClick} className="savedImageItem">
            {showModal && (
                <Modal onClose={()=> setShowModal(false)}>
                <div id = "imageShowContainer">
                    <i className="fa-solid fa-xmark modalShowClose" 
                        alt = '' onClick={(e)=>{e.stopPropagation()
                        ;setShowModal(false); setShowConfirm(false);}}>
                    </i>
                        <div id = 'innerImageShowContainer'>

                            <div>
                                    {description}
                            </div>
                            <img alt = '' id = 'showImageImage' src={imageUrl} />
                            <div id = 'imageShowButtons'>
                                <MaikeModal formType = 'remaikeImage' createdListId = {imageObj.prompts?._id} setShowModal = {setShowModal}/>
                                <button id = 'downloadImage' onClick={handleDownload}>Download</button>
                                {button}
                            </div>
                        </div>
                </div>

                </Modal>
                )}
                <img alt = '' src={imageUrl} />
                
            </li>
        </>
    )
}