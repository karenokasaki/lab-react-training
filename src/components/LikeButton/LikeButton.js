import { useState } from 'react';


function LikeButton() {
    const [likes, setLikes] = useState(0)
    const [color, setColor] = useState('red')


    const handleLikes = () => {
        setLikes(likes + 1);
        const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
        let randomNumber = Math.floor(Math.random() * colors.length)
        setColor(colors[randomNumber])
    }



    return (
        <div>
            <button onClick={handleLikes} style={{backgroundColor: `${color}`}}>{likes} Likes</button>
        </div>
    );
}

export default LikeButton;


