import { SettingsPhone } from '@material-ui/icons';
import { render } from '@testing-library/react';
import Parts from './Parts';

export default function Partlist(props) {
  const allParts = props.parts.filter((part) => {
    let t = props.term
    let n = part.name
    let p = part
    
    if (t === "") {
      return p
    } else if (n.toLowerCase().includes(t.toLowerCase())) {
      return p
    } 
    
  }).map(part => {
    return <Parts 
    id={part.id}
    name={part.name}
    price={part.price}
    num={part.partnum}
    img={part.img}
    link={part.link}
    />

  });
  return (
    <div>{allParts}</div>
  )
}