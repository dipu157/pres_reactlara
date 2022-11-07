import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from "react-bootstrap";

export default function DiagnosisModal({show,setShow}) {

    const [diagnosis,setDiagnosis] = useState("");

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
          <Modal.Title>Add Diagnosis</Modal.Title>
        </Modal.Header>

        <Modal.Body>  
          <Form>
            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Diagnosis</Form.Label>
                <Form.Control onChange={(e) => setDiagnosis(e.target.value)} placeholder="Diagnosis..." />
            </Form.Group>
            </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button type="submit">
            ADD
          </Button>
        </Modal.Footer>
            
      </Modal>
  )
}
