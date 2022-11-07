import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from "react-bootstrap";

export default function ComplainModal({data,show,setShow}) {

    const [complain,setComplain] = useState("");


  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
          <Modal.Title>Chief Complain</Modal.Title>
        </Modal.Header>

        <Modal.Body>  
          <Form>
            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control onChange={(e) => setComplain(e.target.value)} placeholder="Complains..." />
            </Form.Group>
            </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button type="submit" onClick={(e) => savePatient(e,data.id) }>
            ADD
          </Button>
        </Modal.Footer>
            
      </Modal>
  )
}
