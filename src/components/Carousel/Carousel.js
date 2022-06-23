import { useState } from 'react';


function Carousel(props) {

    const images = props.images

    const [index, setIndex] = useState(0);

    const handleRight = () => {
        if (index < images.length - 1) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }
    }

    const handleLeft = () => {
        if (index === 0) {
            setIndex(images.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    return (
        <div>
            <button onClick={handleLeft}>Left</button>
            <img src={images[index]} alt="pessoa aleatória" />
            <button onClick={handleRight}>Right</button>
        </div>
    );
}

export default Carousel;