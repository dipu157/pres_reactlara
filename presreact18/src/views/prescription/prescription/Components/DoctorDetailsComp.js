import React from 'react'
import { Card } from 'react-bootstrap'

export default function DoctorDetailsComp() {
  return (
    <>
        <Card style={{ width: '50%' }}>
          <Card.Body>
            <Card.Title>ডাঃ রেজা আহমেদ</Card.Title>
            <Card.Text>
              এম.বি.বি.এস (ডিএমসি), এমডি(মেডিসিন) <br />
              ডিপার্টমেণ্ট অব কার্ডিওলজি <br />
              জাতীয় হৃদরোগ ইন্সটিটিউট
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '50%' }}>
          <Card.Body>
            <Card.Title className=' text-right'>Dr. Reja Ahmed</Card.Title>
            <Card.Text className=' text-right'>
              MBBS (DMC), MD(Medicine) <br />
              Department of Cardiology <br />
              National Institute of Cardio Vascular Disease
            </Card.Text>
          </Card.Body>
        </Card>
    </>
  )
}
