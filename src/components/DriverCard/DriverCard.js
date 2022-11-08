import './DriverCard.css'
import Rating from '../Rating/Rating'


function DriverCard({name, img, rating, car}) {

    return ( 
        <div className='drivercard'>
            <h2>{name}</h2>
            <img src={img} alt="perfil" />
            <Rating>{rating}</Rating>
            <p>{car.model} {car.licensePlate}</p>
        </div>
     );
}

export default DriverCard;