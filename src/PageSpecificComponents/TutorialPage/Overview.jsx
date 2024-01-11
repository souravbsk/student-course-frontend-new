import React from 'react'

const Overview = ({data}) => {
  return (
    <div>
      <h1 className=' text-2xl font-medium text-gray-800'>overview</h1>
      <p className=' font-normal text-gray-600'>{data}</p>
    </div>
  )
}

export default Overview
