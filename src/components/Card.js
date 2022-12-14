import './Card.css';
function Card(props) {
  return (
    <div className='card'>{props.pick}</div>
  )
}
export default Card