import React, { useState,createContext } from 'react';
import { Modal } from "../../context/Modal";
import jwtFetch from '../../store/jwt';
import './MaikeModal.css'
import { saveImage } from '../../store/session';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { receiveImages } from '../../store/images';


// import { useSelector } from "react-redux";

const ModalContext = createContext()

export {ModalContext}

function MaikeModal(props) {
    const [showModal, setShowModal] = useState(false);
    const [imageData,setImageData] = useState('')
    const [focusedKey,setFocusedKey] = useState('')
    const history = useHistory()
    const dispatch = useDispatch()
    const loading = props.loading
    const createdListId = props.createdListId
    const setLoading = props.setLoading

    const formType = props.formType

    let load; 

    const handleDivClick = (e)=>{
        const key = e.target.getAttribute('alt');
        setFocusedKey(key)
    }

    const handleMaikeClick = async (e)=>{
        e.preventDefault()
        setShowModal(true);
        if (!createdListId) return 
        setLoading(()=>true)
        const res = await jwtFetch(`/api/lists/image/${createdListId}`)
        
        if (res.ok){
            const data = await res.json()
            // console.log(imageData)
            // debugger
            setImageData(data.images)
            dispatch(receiveImages(data))
            setLoading(()=>false)
            console.log(data)
        
        }
   
    }

    const handleSaveClick = (e) =>{
        e.preventDefault()
        setShowModal(false)
        dispatch(saveImage(focusedKey)).then(() => {
            
            history.push('/profile')
        })


        // props.setCreatedListId('')
        // props.setClothingValue('')
        // props.setHairColorValue('')
        // props.setGenderValue('')
        // props.setBackgroundValue('')
        // props.setArtStyleValue('')
        // props.setWebStyleValue('')

    }

    const handleCloseClick = (e)=>{
        e.preventDefault()
        setShowModal(false)

        props.setCreatedListId('')
        props.setClothingValue('')
        props.setHairColorValue('')
        props.setGenderValue('')
        props.setBackgroundValue('')
        props.setArtStyleValue('')
        props.setWebStyleValue('')



    }

    if (loading){
        load = <div id = 'loadingContainer'>
    <div className="waviy">
   <span style={{'--i': 1}}>M</span>
   <span id='aiLoad' style={{'--i': 2}}>A</span>
   <span id = 'aiLoad' style={{'--i':3}}>I</span>
   <span style={{'--i':4}}>K</span>
   <span style={{'--i':5}}>I</span>
   <span style={{'--i':6}}>N</span>
   <span style={{'--i':7}}>G</span>
   <span style={{'--i':8}}>!</span>
  </div>
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
    }else if (imageData[0]){
        let presentingGender;
        let gender = imageData[0].prompts?.gender.toLowerCase()
        if (gender === 'boy' || gender === 'man'){
            presentingGender = 'Male Presenting'
        }else if (gender === 'girl' || gender === 'woman'){
            presentingGender = 'Female Presenting'
        }
          
            load = 
            <div id = 'fullImageContainer'>
                <div id='parameterContainer'>
                    <h1>Preferences</h1>
                    <p>Hair Color</p>
                    <h2>{imageData[0].prompts.hairColor}</h2>
                    <p>Clothing/Acc.</p>
                    <h2>{imageData[0].prompts.clothingAccessory}</h2>
                    <p>Gender</p>
                    <h2>{presentingGender}</h2>
                    <p>Background</p>
                    <h2>{imageData[0].prompts.background}</h2>
                    <p>Art-Style</p>
                    <h2>{imageData[0].prompts.artStyle}</h2>
                    <p>Website-Style</p>
                    <h2>{imageData[0].prompts.websiteStyle}</h2>
    
                </div>
                <div id = 'createModalImageContainer'>
                   <div id = 'leftCreateModal'>
                        <div onClick = {handleDivClick} tabIndex={0}  alt = {imageData[0]._id} id = 'upperLeftModal'> 
                        <img alt = {imageData[0]._id} src = {imageData[0].tempUrl}/>
                        </div>
                        <div onClick = {handleDivClick} tabIndex={0}  alt = {imageData[1]._id} id = 'bottomLeftModal'> 
                        <img alt = {imageData[1]._id} src = {imageData[1].tempUrl}/>
                        </div>
                   </div>
                   <div id = 'rightCreateModal'>
                        <div onClick = {handleDivClick} tabIndex={0}  alt = {imageData[2]._id} id = 'upperRightModal'>
                        <img alt = {imageData[2]._id} src = {imageData[2].tempUrl}/>
                        </div>
                        <div onClick = {handleDivClick} tabIndex={0}  alt = {imageData[3]._id} id = 'bottomRightModal'>
                        <img alt = {imageData[3]._id} src = {imageData[3].tempUrl}/>
                        </div>
                   </div>
                </div>
                <div id = 'buttonMaikeContainer'>
                    <p>Pick an image and click save!</p>

                    <button id = "saveButtonMaike" onClick={handleSaveClick}>Save!</button>
                    <button id = 'cancelButtonMaike' onClick={handleCloseClick}>Cancel</button>
                </div>
            </div>
    }
    let buttonText;
    if (formType === 'Edit'){
       buttonText="re"
    }


    return(
        <>
            <div>
                <button className='maike-avatar' onClick={handleMaikeClick}>

                    {buttonText}M<span className="ai-spans">AI</span>ke
                </button>
                {showModal && (
                <Modal onClose={()=> setShowModal(false)}>
                <i className="fa-solid fa-xmark maikemodalClose" onClick={handleCloseClick}></i>

                    <div id = 'MaikeModalContainer'>
                        {load}
                    </div>
                </Modal>
                )}
            </div>
           
        </>
    );
}

export default MaikeModal;