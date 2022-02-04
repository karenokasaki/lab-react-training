import './DriverCard.css'
import Rating from '../Rating/Rating'


function DriverCard(props) {




    return ( 
        <div className='drivercard'>
            <h2>{props.name}</h2>
            <img src={props.img} alt="perfil" />
            <Rating>{props.rating}</Rating>
            <p>{props.car.model} {props.car.licensePlate}</p>
        </div>
     );
}

export default DriverCard;