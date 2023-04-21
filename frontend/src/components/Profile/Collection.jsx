import { useDispatch, useSelector } from "react-redux"
import { SavedImage } from "./SavedImage";
import "./Collection.css"
import { useEffect } from "react";
import { fetchUserImages } from "../../store/images";

export const Collection = (props) => {

    const allImages = useSelector(state => state.images);

    const usersSavedImageIdsArray = useSelector(state => state.session.user?.images);

    const currentUserId = props.currentUserId

    const dispatch = useDispatch();

    useEffect(() => {
        if (currentUserId) {
            dispatch(fetchUserImages(currentUserId))
        }
    },[dispatch,currentUserId])

    const imagesToRender = usersSavedImageIdsArray?.map((id) => {
        const imageObj = allImages[id]
        return imageObj
    })


    const imageListItems = imagesToRender?.map((imageObj, idx) => {
        const imageListItem = <SavedImage key={JSON.stringify(imageObj + `${(10293 * idx)}`)} imageObj={imageObj}/>
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