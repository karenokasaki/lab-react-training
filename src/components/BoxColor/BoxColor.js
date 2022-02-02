
import './BoxColor.css'


function BoxColor(props) {
    
    let divStyle = {backgroundColor: 'rgb('+props.r+','+props.g+','+props.b+')'}
    //jeito horrível de fazer isso mas deu certo. 

    return (
        <div className='color' style={divStyle}>
            rgb({props.r}, {props.g}, {props.b})
        </div>
    )
}

export default BoxColor