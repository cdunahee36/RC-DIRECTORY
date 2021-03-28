import './CSS/parts.css'

export default function Parts(props) {
  return (
    <div>
      {props.id}
      <img src={props.img} alt="chosen-part"></img>
      {props.name}
      <p>Price: {props.price}</p>
      <p>Model#: {props.num}</p>
      <a href={props.link}>Link</a>
    </div>
  )
}