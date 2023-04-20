import "./ListItem.css";
import ListOptions from "./ListOptions";

function ListItem({ prop }) {
  return (
    <div key={JSON.stringify(prop)}>
      <ListOptions key={JSON.stringify(prop?._id)} list = {prop}/>
      <div className="list-item-content">
        <div key={JSON.stringify(prop)} className="list-item-grid">
          <p className="list-item-split">
            <span className="list-title-key">Art Style: </span>{" "}
            <span className="list-prop-info"> {prop?.artStyle}</span>
          </p>
          <p className="list-item-split">
            <span className="list-title-key">Clothing/Accessory: </span>{" "}
            <span className="list-prop-info">{prop?.clothingAccessory}</span>
          </p>
          <p className="list-item-split">
            <span className="list-title-key">Hair Color: </span>{" "}
            <span className="list-prop-info"> {prop?.hairColor}</span>
          </p>
          <p className="list-item-split">
            <span className="list-title-key">Web Style: </span>{" "}
            <span className="list-prop-info">{prop?.websiteStyle}</span>
          </p>
          <p className="list-item-split">
            <span className="list-title-key">Gender: </span>
            <span className="list-prop-info">{prop?.gender}</span>
          </p>
          <p className="list-item-split">
            <span className="list-title-key">Background: </span>{" "}
            <span className="list-prop-info">{prop?.background}</span>
          </p>
        </div>
      </div>

      <div className="horizontal-divider1"></div>
    </div>
  );
}

export default ListItem;
