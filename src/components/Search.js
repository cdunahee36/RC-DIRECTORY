import './CSS/search.css'

export default function Search(props) {
  return(
    <input id="search-input" type="text" placeholder="Search by part or model" onChange={props.change} value={props.value} />
  )
}