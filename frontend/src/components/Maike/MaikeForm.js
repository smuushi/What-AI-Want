import "./Maike.css";

const MaikeForm = () => {
  const HairColor = {
    Red: "red",
    White: "white",
    Pink: "pink",
    Blue: "blue",
    Black: "black",
    Brown: "brown",
    Green: "green",
  };

  const ClothingAcessory = {
    "Maid Uniform": "maid uniform",
    "T-shirt": "t-shirt",
    "Sailor Uniform": "sailor uniform",
    Tuxedo: "tuxedo",
    Hoodie: "hoodie",
  };

  const Gender = {
    "Male-Presenting": "boy",
    "Female-Presenting": "girl",
  };

  const Background = {
    Forest: "forest",
    City: "city",
    Arcade: "arcade",
    Mall: "mall",
    Park: "park",
    Mountain: "mountain",
    Beach: "beach",
    Ocean: "ocean",
  };

  const ArtStyle = {
    Anime: "Anime Key Visuals",
    Game: "Game Key Visuals",
    Digital: "Digital Art",
    "Visual Novel": "Visual Novel Key Visuals",
    "Kids Drawing": "Kids Drawing",
    Baroque: "Baroque Art",
  };

  const WebStyle = {
    Pixiv: "pixiv",
    Twitter: "twitter",
  };

  return (
    <div className="maike-form-box">
      <h1 id="maike-title">What do you want?</h1>

      <div className="maike-form-divider">
        <div className="maike-form-content">
          <h1 id="maike-appearance">APPEARANCE</h1>
          <div className="select-container">
            <select>
              <option value="" disabled selected>
                Clothing/Acessory ▽
              </option>
              {Object.entries(ClothingAcessory).map(([cloth, value]) => (
                <option key={cloth} value={value}>
                  {cloth}
                </option>
              ))}
            </select>
          </div>
          <div className="select-container">
            <select>
              <option value="" disabled selected>
                Hair-Color ▽
              </option>
              {Object.entries(HairColor).map(([color, value]) => (
                <option key={color} value={value}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <div className="select-container">
            <select>
              <option value="" disabled selected>
                Gender ▽
              </option>
              {Object.entries(Gender).map(([gender, value]) => (
                <option key={gender} value={value}>
                  {gender}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="maike-form-center-line"></div>

        <div className="maike-form-content">
          <h1 id="maike-style">STYLE</h1>
          <div className="select-container">
            <select>
              <option value="" disabled selected>
                Background ▽
              </option>
              {Object.entries(Background).map(([background, value]) => (
                <option key={background} value={value}>
                  {background}
                </option>
              ))}
            </select>
          </div>
          <div className="select-container">
            <select>
              <option value="" disabled selected>
                ArtStyle ▽
              </option>
              {Object.entries(ArtStyle).map(([artstyle, value]) => (
                <option key={artstyle} value={value}>
                  {artstyle}
                </option>
              ))}
            </select>
          </div>
          <div className="select-container">
            <select>
              <option value="" disabled selected>
                WebStyle ▽
              </option>
              {Object.entries(WebStyle).map(([webstyle, value]) => (
                <option key={webstyle} value={value}>
                  {webstyle}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <button className="maike-avatar">Maike</button>
    </div>
  );
};

export default MaikeForm;
