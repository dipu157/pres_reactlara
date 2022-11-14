import AppURL from 'api/AppURL';
import React, { useEffect, useState } from 'react'
import { Card, Table, Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import axios  from 'axios';
import DoctorModal from './Modal/DoctorModal';
import { Redirect } from 'react-router';


export default function DoctorList() {

  if (!localStorage.getItem('token')) {
    return <Redirect to="/login" />
}

  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState([]);

  const setShowEditModal = (data) => {
    setData(data);
    setShowModal(true);
  }

  const [doctor, setDoctor] = useState([]);
 

  useEffect(() => {
    axios.get(AppURL.DoctorList).then(response => {
        setDoctor(response.data);
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
                <Card.Title as="h4">Doctor List</Card.Title>
                <Button style={{float: 'right'}} onClick={() => setShowModal(true)}>Add New</Button>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                <thead>
                    <tr>
                        <th className="border-0">Photo</th>
                        <th className="border-0">Name</th>
                        <th className="border-0">Department</th>
                        <th className="border-0">Designation</th>
                        <th className="border-0">Speciality</th>
                        <th className="border-0">Degrees</th>
                        <th className="border-0">Action</th>
                    </tr>
                </thead>   

                {
                    doctor.map((item,i) =>
                        <tbody  key={i}>
                            <tr>
                                <td>{item.image}</td>
                                <td>{item.name}</td>
                                <td>{item.department.name}</td>
                                <td>{item.designation.name}</td>
                                <td>{item.speciality}</td>
                                <td>{item.degrees}</td>
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

      <DoctorModal data={data} show={showModal} setShow={setShowModal} />

    </>
  )
}
