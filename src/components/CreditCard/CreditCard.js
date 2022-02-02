import './CreditCard.css'
import visa from '../../assets/images/visa.png'
import master from '../../assets/images/visa.png'

function CreditCard(props) {
    let type = props.type === "Visa" ? visa : master
    let number = props.number.slice(-4)
    
    let bgc = {backgroundColor: props.bgColor, color: props.color}


    
    
    return (
        <div className='card' style={bgc}>
            <img className='bandeira' src={type} alt="bandeira do cartão"></img>
            <div className='numberCard'>********{number}</div>
            <div>Expires <span id='expireDate'>{props.expirationMonth}/{props.expirationYear}</span> <span id='nameBank'> {props.bank}</span></div>
            <div className='name'>{props.owner}  </div>
        </div>
    )
}


export default CreditCard