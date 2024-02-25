import React from 'react'
import Card from '../../components/Card/Card'
import Heading from '../../components/Heading/Heading'
import ProfileData from '../../Content/ProfileData'
function People() {
  return (
    <>
     <Heading content="Faculty Members" />
      <Card ProfileData={ProfileData}/>
      <Heading content="PHD Scholars" />
      <Card ProfileData={ProfileData}/>
      <Heading content="M.Tech Students" />
      <Card ProfileData={ProfileData}/>
      <Heading content="UG Students" />
      <Card ProfileData={ProfileData}/>
      <Heading content="Interns" />
      <Card ProfileData={ProfileData}/>
      <Heading content="M.Tech Alumni" />
      <Card ProfileData={ProfileData}/>
      <Heading content="UG Alumni" />
      <Card ProfileData={ProfileData}/>
      
    </>
  )
}

export default People