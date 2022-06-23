import './Greetings.css'

function Greetings(props) {
    
    
    if (props.lang === "de") {
        return (
            <p>Resposta em alemão: {props.children}</p>
        )
    }
    if (props.lang === "fr") {
        return (
            <p>Respota em francês: François</p>
        )
    }
}


export default Greetings