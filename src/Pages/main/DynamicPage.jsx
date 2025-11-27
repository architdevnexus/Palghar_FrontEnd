import React from 'react'
import { useParams } from 'react-router-dom'
const DynamicPage = () => {
    const {_id} = useParams();
  return (
    <div>DynamicPage</div>
  )
}

export default DynamicPage