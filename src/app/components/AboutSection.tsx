import React from 'react'
import About from './About'

const AboutSection = () => {
    const aboutContentOne = {
        heading: 'NGMI SER',
        breadTextOne: 'invest more in btc',
        breadTextTwo: 'or ngmi, invest more',
        breadTextThree: ' peeepoo peeepoo piiipii',
        breadTextFour: 'bismillah',
    }

    const aboutContentTwo = {
        heading: 'ETH IS TOXIC',
        breadTextOne: 'wowowoaeaw',
        breadTextTwo: 'allan was here and coded',
        breadTextThree: ' wen yuga announcement',
        breadTextFour: 'Petrus rocks',
    }

    const aboutContentThree = {
        heading: 'RUG ME SER',
        breadTextOne: 'what is bTC ordinals',
        breadTextTwo: 'ETH to 10k',
        breadTextThree: ' I do stuff',
        breadTextFour: 'This is my website',
    }

  return (
<>
<div className='md:flex md:flex-row md:justify-center md:py-20 text-center'>

<About content={aboutContentOne}/>
<About content={aboutContentTwo}/>
<About content={aboutContentThree}/>
</div>

</>
  )
}

export default AboutSection