import AppURL from 'api/AppURL';
import React, { useEffect, useState } from 'react'
import { Card, Table, Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import axios  from 'axios';

export default function OEModal({...oeData}) {

  return (
    <>
      <Modal show={oeData.show} onHide={() => oeData.setShow(false)}>
      <Modal.Header closeButton>
          <Modal.Title>ON Examination</Modal.Title>
        </Modal.Header>

        <Modal.Body>  
          <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control onChange={(e) => oeData.setBP(e.target.value)} value={oeData.bp} placeholder="BP" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control onChange={(e) => oeData.setPulse(e.target.value)} placeholder="Pulse" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control onChange={(e) => oeData.setTemp(e.target.value)} placeholder="Temp" />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control onChange={(e) => oeData.setWeight(e.target.value)} placeholder="Weight" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control onChange={(e) => oeData.setSpo(e.target.value)} placeholder="Spo2" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control onChange={(e) => oeData.setSugar(e.target.value)} placeholder="Sugar" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control onChange={(e) => oeData.setPastHist(e.target.value)} placeholder="Past History" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control onChange={(e) => oeData.setDrugHist(e.target.value)} placeholder="Drug History" />
            </Form.Group>
            </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => oeData.setShow(false)}>
            Close
          </Button>
          <Button type="submit" onClick={() => { 
                                      oeData.setShow(false); 
                                      }}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
