import { useSelector } from "react-redux"
import { SavedImage } from "./SavedImage";
import "./Collection.css"

export const Collection = (props) => {

    const allImages = useSelector(state => state.images);

    const usersSavedImageIdsArray = useSelector(state => state.session.user?.images);

    const imagesToRender = usersSavedImageIdsArray?.map((id) => {
        const imageObj = allImages[id]
        return imageObj
    })


    const imageListItems = imagesToRender?.map((imageObj) => {
        const imageListItem = <SavedImage key={JSON.stringify(imageObj)} imageObj={imageObj}/>
        return imageListItem
    })

    return (
        <>
            <div id = 'collectionImageContainer'>
                <h1>Saved <span>AI</span>mages</h1>
                 <ul className="imagesContainer">
                {imageListItems}
                </ul>
            </div>
        </>
    )
}