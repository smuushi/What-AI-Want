import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createList,updateList,getList,fetchList } from "../../store/lists";
import "./Maike.css";

import MaikeModal from "./MaikeModal";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// test list id '644010777927a88f28c4c4d4'

const MaikeForm = (props) => {

  const dispatch = useDispatch();
  const formType = props.type
  const {listId} = useParams()
  const currentList = useSelector(getList(listId))


  useEffect(()=>{
    dispatch(fetchList(listId))
  },[listId,dispatch])



let defaultClothing;
let defaultHairColor;
let defaultGender;
let defaultBackground;
let defaultArt;
let defaultWeb;
let defaultCreatedList;


defaultClothing = ""
defaultHairColor = ""
defaultGender = ""
defaultBackground = ""
defaultArt = ""
defaultWeb= ""
defaultCreatedList= ""

const [clothingValue, setClothingValue] = useState(defaultClothing);
const [hairColorValue, setHairColorValue] = useState(defaultHairColor);
const [genderValue, setGenderValue] = useState(defaultGender);
const [backgroundValue, setBackgroundValue] = useState(defaultBackground);
const [artStyleValue, setArtStyleValue] = useState(defaultArt);
const [webStyleValue, setWebStyleValue] = useState(defaultWeb);
const [createdListId, setCreatedListId] = useState(defaultCreatedList);
const [loading,setLoading] = useState(false)
const handleChange = (setter) => (event) => {
  setter(event.target.value);
};

useEffect(()=>{

  if (formType !== 'Create'){
    setClothingValue(currentList?.clothingAccessory)
    setHairColorValue(currentList?.hairColor)
    setGenderValue(currentList?.gender)
    setBackgroundValue(currentList?.background)
    setArtStyleValue(currentList?.artStyle)
    setWebStyleValue(currentList?.websiteStyle)

  }
},[currentList,formType])



  const handleSaveList = () => {
    const listData = {
      clothingAccessory: clothingValue,
      hairColor: hairColorValue,
      gender: genderValue,
      background: backgroundValue,
      artStyle: artStyleValue,
      websiteStyle: webStyleValue,
    };
    dispatch(createList(listData)).then((list) => {
      setCreatedListId(() => list._id);
    });
  };

  // let saveButton;

  // let maikeButton;
  // if (createdListId){
  //   saveButton = <div id = 'hideSaveButton'>Saved !</div>
  //   maikeButton = <MaikeModal loading = {loading}
  //   imageData = {imageData}
  //   createdListId = {createdListId}
  //   setLoading = {setLoading}
  //   setImageData = {setImageData}
  //   setCreatedListId = {setCreatedListId}
  //   setClothingValue = {setClothingValue}
  //   setHairColorValue = {setHairColorValue}
  //   setGenderValue = {setGenderValue}
  //   setBackgroundValue = {setBackgroundValue}
  //   setArtStyleValue = {setArtStyleValue}
  //   setWebStyleValue = {setWebStyleValue}
  //   />
  // }else{
  //   saveButton = <button className="maike-avatar" onClick={handleSaveList}>
  //   Save List
  // </button>
  //   maikeButton = <button id = 'hideMaikeButton'> MAIke</button>
  // }
  // if (clothingValue === "" || hairColorValue === "" || genderValue === ""
  // || backgroundValue === "" || artStyleValue === "" || webStyleValue === "" ) {
  //   saveButton = <div id = 'hideMaikeButton'>Save List</div>
  // }


  const handleUpdateList = () =>{
    const listData = {
      clothingAccessory: clothingValue,
      hairColor: hairColorValue,
      gender: genderValue,
      background: backgroundValue,
      artStyle: artStyleValue,
      websiteStyle: webStyleValue,
      _id:listId
    };
    dispatch(updateList(listData)).then((list) => {
      setCreatedListId(() => listData._id);
    });
  };
  let buttonText;
  if (formType === 'Edit'){
    buttonText = 're'
  }

  let saveButton;
  let maikeButton;

  if (createdListId){
    saveButton = <div id = 'hideSaveButton'>Saved !</div>
    maikeButton = <MaikeModal loading = {loading}
    createdListId = {createdListId}
    setLoading = {setLoading}
    setCreatedListId = {setCreatedListId}
    setClothingValue = {setClothingValue}
    setHairColorValue = {setHairColorValue}
    setGenderValue = {setGenderValue}
    setBackgroundValue = {setBackgroundValue}
    setArtStyleValue = {setArtStyleValue}
    setWebStyleValue = {setWebStyleValue}
    formType = {formType}
    />
  }else{
    if (formType === 'Create'){
    saveButton = <button className="maike-avatar" onClick={handleSaveList}>
    Save List
    </button>
    }else{
      saveButton = <button className="maike-avatar" onClick={handleUpdateList}>
      Update List
      </button>
    }
    maikeButton = <button id = 'hideMaikeButton'>{buttonText}MAIke</button>
  }
  if (clothingValue === "" || hairColorValue === "" || genderValue === ""
  || backgroundValue === "" || artStyleValue === "" || webStyleValue === "" ) {
    saveButton = <div id = 'hideMaikeButton'>Save List</div>
  }

  const HairColor = {
    Red: "Red",
    Silver: 'Silver',
    White: "White",
    Pink: "Pink",
    Blue: "Blue",
    Black: "Black",
    Brown: "Brown",
    Green: "Green",
    Blonde: 'Blonde',
    Grey: 'Grey'
  };


  const ClothingAcessory = {
    Formal:'Formal',
    'Business-Suit':'Business-Suit',
    Tuxedo: "Tuxedo",
    Cardigan: 'Cardigan',
    Peacoat: 'Peacoat',
    Blazer: 'Blazer',
    Hoodie: "Hoodie",
    'Track-Suit' : 'Track-Suit',
    "T-shirt": "T-shirt",
    Beanie: 'Beanie',
    Scarf: 'Scarf',
    'Baseball-Cap':'Baseball-Cap',
    Headphones: 'Headphones',
    Sunglasses: 'Sunglasses',
    Robe: 'Mage Robe',
    Armor: 'Armor',
    "Maid-Uniform": "Maid-Uniform",
    "Sailor-Uniform": "Sailor-Uniform",

  };

  const Gender = {
    "Male-Presenting": "Boy",
    'Male-Presenting(older)': 'Man',
    "Female-Presenting": "Girl",
    "Female-Presenting(older)": "Woman",

  };

  const Background = {

    None: 'None',
    Forest: "Forest",
    Winter: 'Winter',
    Night: 'Night',
    City: "City",
    Cafe: 'Cafe',
    Arcade: "Arcade",
    Mall: "Mall",
    Park: "Park",
    Castle: 'Castle',
    Mansion: 'Mansion',
    Mountain: "Mountain",
    Beach: "Beach",
    Desert: 'Desert',
    Volcano: 'Volcano',
    Magical: 'Magical',
    Musical: 'Musical'

  };

  const ArtStyle = {
    Anime: "Anime Key Visuals",
    Game: "Video Game Promo Art",
    "Visual-Novel": "Visual Novel Key Visuals",
    "Kids Drawing": "Kids Drawing",
    "3D-Render": "3D-Render",
    Realistic: 'Realistic',
    Baroque: "Baroque Art",
    Impresssionism: 'Impressionism Art',
    Digital: "Digital Art",
    "Pixel-Art": "Pixel-Art",
    "Cel-Shaded-Art": 'Cel-Shaded-Art',
    Pixar:'Pixar-Art-Style'
  };

  const WebStyle = {
    Pixiv: "Pixiv",
    Twitter: "Twitter",
    'Artvee(Classical)': 'Artvee',
    Instagram: 'Instagram',
    deviantart:'Deviantart'
  };

  return (
    <div className="maike-form-box">
      <h1 id="maike-title">What do you want?</h1>

      <div className="maike-form-divider">
        <div className="maike-form-content">
          <h1 id="maike-appearance">APPEARANCE</h1>
          <div className="select-container">
            <select
              value={clothingValue}
              onChange={handleChange(setClothingValue)}
            >
              <option id="option" value="" disabled>
                <p>Clothing/Acessory</p>
              </option>
              {Object.entries(ClothingAcessory).map(([cloth, value]) => (
                <option key={cloth} value={value}>
                  {cloth}
                </option>
              ))}
            </select>
            <span className="select_arrow">
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </div>
          <div className="select-container">
            <select
              value={hairColorValue}
              onChange={handleChange(setHairColorValue)}
            >
              <option value="" disabled>
                Hair-Color
              </option>
              {Object.entries(HairColor).map(([color, value]) => (
                <option key={color} value={value}>
                  {color}
                </option>
              ))}
            </select>
            <span className="select_arrow">
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </div>
          <div className="select-container">
            <select value={genderValue} onChange={handleChange(setGenderValue)}>
              <option value="" disabled>
                Gender
              </option>
              {Object.entries(Gender).map(([gender, value]) => (
                <option key={gender} value={value}>
                  {gender}
                </option>
              ))}
            </select>
            <span className="select_arrow">
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </div>
        </div>

        <div className="maike-form-center-line"></div>

        <div className="maike-form-content">
          <h1 id="maike-style">STYLE</h1>
          <div className="select-container">
            <select
              value={backgroundValue}
              onChange={handleChange(setBackgroundValue)}
            >
              <option value="" disabled>
                Background
              </option>
              {Object.entries(Background).map(([background, value]) => (
                <option key={background} value={value}>
                  {background}
                </option>
              ))}
            </select>
            <span className="select_arrow">
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </div>
          <div className="select-container">
            <select
              value={artStyleValue}
              onChange={handleChange(setArtStyleValue)}
            >
              <option value="" disabled>
                Art-Style
              </option>
              {Object.entries(ArtStyle).map(([artstyle, value]) => (
                <option key={artstyle} value={value}>
                  {artstyle}
                </option>
              ))}
            </select>
            <span className="select_arrow">
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </div>
          <div className="select-container">
            <select
              value={webStyleValue}
              onChange={handleChange(setWebStyleValue)}
            >
              <option value="" disabled>
                Web-Style
              </option>
              {Object.entries(WebStyle).map(([webstyle, value]) => (
                <option key={webstyle} value={value}>
                  {webstyle}
                </option>
              ))}
            </select>
            <span className="select_arrow">
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </div>
        </div>
      </div>

      <div className="list-maike-buttons">
        {saveButton}

        {maikeButton}
      </div>
    </div>
  );
};

export default MaikeForm;
