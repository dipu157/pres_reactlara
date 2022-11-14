import AppURL from 'api/AppURL';
import React, { useEffect, useState } from 'react'
import { Card, Table, Container, Row, Col, Button, Form } from "react-bootstrap";
import axios  from 'axios';
import Modal from 'react-bootstrap/Modal';
import { Redirect } from 'react-router';

export default function PrescriptionList() {

  if (!localStorage.getItem('token')) {
    return <Redirect to="/login" />
}

  const [prescription, setPrescription] = useState([]);

  useEffect(() => {
    axios.get(AppURL.PrescriptionList).then(response => {
      setPrescription(response.data);
    }).catch(error => {

    });
  }, [])

  return (
    <>
      <Container fluid>
        <Row>
          
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Prescription List</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                <thead>
                    <tr>
                        <th className="border-0">Patient Name</th>
                        <th className="border-0">Visit Date</th>
                        <th className="border-0">Complain</th>
                        <th className="border-0">Diagnosis</th>
                        <th className="border-0">Medicine</th>
                        <th className="border-0">Action</th>
                    </tr>
                </thead>   

                {
                    prescription.map((item,i) =>
                        <tbody  key={i}>
                            <tr>
                                <td>{item.patient.full_name}</td>
                                <td>{item.date}</td>
                                <td>{item.complain}</td>
                                <td>{item.diagnosis}</td>
                                <td></td>
                                <td>
                                  <Button className='btn btn-primary'>Print</Button>
                                </td>
                            </tr>
                        </tbody>
                    )
                }
      
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
