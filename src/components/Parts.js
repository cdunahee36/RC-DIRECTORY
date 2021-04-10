import './CSS/parts.css'

export default function Parts(props) {
  return (
    <div id="part">
      <p>Price: {props.price}</p>
      <a href={props.link}>Link</a>
      <p>{props.name}</p>
      <img src={props.img} alt="chosen-part"></img>
      <p>Model#: {props.num}</p>
    </div>
  )
}