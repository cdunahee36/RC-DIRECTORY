import React, { useState } from 'react';
import Partlist from '../components/Partlist'
import {partData} from '../components/partData';
import Search from '../components/Search'

export default function Partsfinder() {
  const [partsearch, setPartsearch] = useState("")

  const handleInput = (event) => {
    setPartsearch(event.target.value) 
  }

  return(
    <div>
      <Search change={handleInput} value={partsearch.input}/>
      <Partlist parts={partData} term={partsearch}/>
    </div>
  )
}