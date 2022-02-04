import { useState } from 'react';
import './LikeButton.css'

function LikeButton() {
    const [likes, setLikes] = useState(0)

    const [color, setColor] = useState('red')


    const handleLikes = () => {
        setLikes(likes + 1);
    }

    const handleColor = () => {
        const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
        setColor(colors[Math.floor(Math.random() * colors.length)])
        console.log('hi')

    }

    const handle = () => {
        handleLikes()
        handleColor()
    }

    return (
        <div>
            <button onClick={handle} style={{backgroundColor: `${color}`}}>{likes} Likes</button>

        </div>
    );
}

export default LikeButton;


