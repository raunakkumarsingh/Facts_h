import React from 'react'
import Card from '../../components/Card/Card'
import Heading from '../../components/Heading/Heading'
import ProfileData from '../../Content/ProfileData'
function People() {
  return (
    <>
     <Heading content="Faculty Members" />
      <Card ProfileData={ProfileData.Faculty} type="1"/>
      <Heading content="PHD Scholars" />
      <Card ProfileData={ProfileData.PhDScholars} type="0"/>
      <Heading content="M.Tech Students" />
      <Card ProfileData={ProfileData.MTech} type="0"/>
      <Heading content="UG Students" />
      <Card ProfileData={ProfileData.UG} type="0"/>
      <Heading content="Interns" />
      <Card ProfileData={ProfileData.Interns} type="0"/>
      <Heading content="Alumni" />
      <Card ProfileData={ProfileData.Alumni} type="0"/>
      
    </>
  )
}

export default People