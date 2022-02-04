
import './Rating.css'


function Rating(props) {
    const numberOfStars = Math.round(props.children);
  
    let star = '★'; // << ISSO AQUI É SACANAGEM
  
    star = star.repeat(numberOfStars).padEnd(5, '☆');
  
    return <span>{star}</span>;
  }

export default Rating


