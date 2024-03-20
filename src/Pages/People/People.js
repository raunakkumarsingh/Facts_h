import React from 'react'
import Card from '../../components/Card/Card'
import Heading from '../../components/Heading/Heading'
import ProfileData from '../../Content/ProfileData'
function People() {
  return (
    <div className='container'>
     <Heading content="Faculty Members" />
      <Card ProfileData={ProfileData.Faculty} type="1"/>
      <Heading content="PHD Scholars" />
      <Card ProfileData={ProfileData.PhDScholars} type="0"/>
      <Heading content="International Collaborators" />
      <Card ProfileData={ProfileData.International_Collaborators} type="0"/>
      <Heading content="Industry Experts" />
      <Card ProfileData={ProfileData.Industry_Experts} type="0"/>

      <Heading content="M.Tech Students" />
      <Card ProfileData={ProfileData.MTech} type="0"/>
      <Heading content="UG Students" />
      <Card ProfileData={ProfileData.UG} type="0"/>
      <Heading content="Interns" />
      <Card ProfileData={ProfileData.Interns} type="0"/>
      <Heading content="Alumni" />
      <Card ProfileData={ProfileData.Alumni} type="0"/>
      
    </div>
  )
}

export default People