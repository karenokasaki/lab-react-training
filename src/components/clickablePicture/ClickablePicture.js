import { useState } from "react";


function ClickablePicture(props) {
    //definir o state
    const [img, setImg] = useState(props.img)

    function handleImage() {
        if (img === props.img) {
            setImg(props.imgClicked)
        } else {
            setImg(props.img)
        }
    }

    return (
        <img onClick={handleImage} src={img} alt="perfil"></img>
    )
}

export default ClickablePicture