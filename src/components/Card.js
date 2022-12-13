import './Card.css';

function Card(props) {



  return (
    <div className='card'>{props.set[props.pick]}</div>
  )
}

export default Card