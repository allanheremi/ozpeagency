import React from 'react'

const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit g elit Lorem ipsum dolor sit amet consectetur'

const Heading = () => {
  return (
    <h1 className='p-4 text-2xl flex items-center px-8 md:px-24 h-[88vh]'>
      {text.toUpperCase()}
    </h1>
  )
}

export default Heading