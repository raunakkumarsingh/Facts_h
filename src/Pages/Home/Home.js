import React from 'react'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import Card from '../../components/Card/Card'
import Heading from '../../components/Heading/Heading'

function Home() {
  return (
    <>
        <ImageSlider/>
        <Heading content="Proposed Faculty Members" />
        <Card/>
    </>
  )
}

export default Home