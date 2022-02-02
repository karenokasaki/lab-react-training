
import './Rating.css'
import one from '../../assets/images/oneStar.JPG'
import two from '../../assets/images/twoStar.JPG'
import three from '../../assets/images/threeStar.JPG'
import four from '../../assets/images/fourStar.JPG'
import five from '../../assets/images/fiveStar.JPG'
import zero from '../../assets/images/zeroStar.JPG'



let result

function Rating(props) {

    let score = props.children

    if (score < 1){
        result = zero
    }
    if (score >= 1 && score < 2){
        result = one
    }
    if (score >= 2 && score < 3){
        result = two
    }
    if (score >= 3 && score < 4) {
        result = three
    }
    if (score >= 4 && score < 5) {
        result = four
    }
    if (score > 4) {
        result = five
    }


    return (
        <div>
            <img src={result} alt='stars'></img>
        </div>
    )
}

export default Rating