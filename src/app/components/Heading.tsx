import React from 'react'

const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit'

const Heading = () => {
  return (
    <h1 className='p-4 text-3xl pt-44 pb-64 px-8 md:px-16'>
      {text.toUpperCase()}
    </h1>
  )
}

export default Heading