import "./ListItem.css";

function ListItem({ prop }) {
  return (
    <div className="list-item-box">
      <div className="list-item-content">
        <p>{prop?.artStyle}</p>
        <p>{prop?.clothingAccesory}</p>
        <p>{prop?.hairColor}</p>
        <p>{prop?.websiteStyle}</p>
        <p>{prop?.gender}</p>
        <p>{prop?.background}</p>
      </div>
      <div>
        <button className="list-item-edit">Edit</button>
      </div>
    </div>
  );
}

export default ListItem;
