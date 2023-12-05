import React from 'react'

type Props = {}

const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit'

const Heading = (props: Props) => {
  return (
    <h1 className='p-4 text-4xl pt-44 pb-64 px-8'>
      {text.toUpperCase()}
    </h1>
  )
}

export default Heading