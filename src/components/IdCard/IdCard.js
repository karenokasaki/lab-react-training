import './IdCard.css'


function IdCard(props) {
    return (
        <div className='card'>
            <img src={props.picture} alt='profile'></img>
            <div>
                First Name: {props.firstName}<br />
                Last Name: {props.lastName}<br />
                Gender: {props.gender}<br />
                Height: {props.height}<br />
                Birth: {props.birth}<br />
            </div>

        </div>


    )
}

export default IdCard