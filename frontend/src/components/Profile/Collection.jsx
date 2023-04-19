import { useSelector } from "react-redux"
import { SavedImage } from "./SavedImage";
import "./Collection.css"

export const Collection = (props) => {

    const allImages = useSelector(state => state.images);

    const usersSavedImageIdsArray = useSelector(state => state.session.user.images);

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
            <ul className="imagesContainer">
                {imageListItems}
            </ul>
        </>
    )
}