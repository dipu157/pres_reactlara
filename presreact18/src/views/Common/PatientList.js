import AppURL from 'api/AppURL';
import React, { useEffect, useState } from 'react'
import { Card, Table, Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import axios  from 'axios';
import PatientModal from './Modal/PatientModal';

export default function PatientList() {

  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState([]);

  const setShowEditModal = (data) => {
    setData(data);
    setShowModal(true);
  }

  const [patient, setPatient] = useState([]);

  useEffect(() => {
    axios.get(AppURL.PatientList).then(response => {
        setPatient(response.data);
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
                <Card.Title as="h4">Patient List</Card.Title>
                <Button style={{float: 'right'}} onClick={() => setShowModal(true)}>Add New</Button>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                <thead>
                    <tr>
                        <th className="border-0">Name</th>
                        <th className="border-0">Phone</th>
                        <th className="border-0">Age</th>
                        <th className="border-0">Gender</th>
                        <th className="border-0">Action</th>
                    </tr>
                </thead>   

                {
                    patient.map((item,i) =>
                        <tbody  key={i}>
                            <tr>
                                <td>{item.full_name}</td>
                                <td>{item.phone}</td>
                                <td>{item.dob}</td>
                                <td>{item.gender}</td>
                                <td>
                                  <Button onClick={() => setShowEditModal(item)} className='btn btn-primary'>Edit</Button>
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

      <PatientModal data={data} show={showModal} setShow={setShowModal} />
    </>
  )
}
