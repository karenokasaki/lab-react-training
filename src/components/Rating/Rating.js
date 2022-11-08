import './Rating.css';

function Rating(props) {
  const numberOfStars = Math.round(props.children);
  let result = '★'.repeat(numberOfStars).padEnd(5, '☆');

  return (
    <>
      <p>{result}</p>
    </>
  );
}

export default Rating;
