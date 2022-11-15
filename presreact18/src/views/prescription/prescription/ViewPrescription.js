import React from 'react'
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router'

export default function ViewPrescription() {

    const params = useParams();


  return (
    <div>
        <p>ViewPrescription</p>

        <Button onClick={() => {window.print()}} >Print </Button>

        {JSON.stringify(params,null,2)}
    </div>
  )
}
