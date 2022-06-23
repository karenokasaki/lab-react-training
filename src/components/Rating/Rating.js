
import './Rating.css'


function Rating(props) {

  const numberOfStars = Math.round(props.children)

  let star = '★'
  let starEmpty = '☆'

  let result = star.repeat(numberOfStars).padEnd(5, starEmpty)

  return (
    <>
      <p>{result}</p>
    </>
  )
}

export default Rating


