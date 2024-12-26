import React from 'react'
import { useParams } from 'react-router-dom'

const Player = () => {

    const {id} = useParams()

  return (
    <div>Player</div>
  )
}

export default Player