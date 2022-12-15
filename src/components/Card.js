import './Card.css';
function Card(props) {
 
  return (
    <button className='card' onClick={props.onClick} value={props.pick}>{props.pick}</button>
  )
}
export default Card