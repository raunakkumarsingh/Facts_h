import React from 'react'
import Card from '../../components/Card/Card'
import Heading from '../../components/Heading/Heading'
import ProfileData from '../../Content/ProfileData'
function People() {
  return (
    <>
     <Heading content="Faculty Members" />
      <Card ProfileData={ProfileData}/>

    </>
  )
}

export default People