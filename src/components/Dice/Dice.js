import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'
import diceZero from '../../assets/images/dice-empty.png'

import './Dice.css'
import { useState } from 'react'

function Dice() {
    const dices = [dice1, dice2, dice3, dice4, dice5, dice6]

    const [dice, setDice] = useState(dice3)

    const changeDice = () => {
        setTimeout(() => {
            setDice(dices[Math.floor(Math.random() * dices.length)])
        }, 1000);
        setDice(diceZero)
    }

    return ( 
        <div className='dice'>
            <img onClick={changeDice} src={dice} alt="dice" />
        </div>
     );
}

export default Dice;