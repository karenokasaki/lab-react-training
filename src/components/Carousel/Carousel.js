import { useState } from 'react';
import './Carousel.css'

function Carousel(props) {

    const images = props.images

    const [display, setDisplay] = useState(0);
    
    const handleLeft = () => {
        if (display === 0) {
            return
        } else {
            setDisplay(display - 1)
        }
    }
    const handleRight = () => {
        if (display < images.length - 1) {
            setDisplay(display + 1)
        } else return
    }

    return ( 
        <div>
            <button onClick={handleLeft}>Left</button>
            <img src={images[display]} alt="pessoa aleatória" />
            <button onClick={handleRight}>Right</button>
        </div>
     );
}

export default Carousel;