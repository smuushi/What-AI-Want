

export const SavedImage = (props) => {

    const imageObj = props.imageObj;

    const imageUrl = imageObj?.tempUrl;



    return (

        <>
            <li className="savedImageItem">
                <img src={imageUrl} />
                <button> ... </button>
            </li>
        </>
    )
}