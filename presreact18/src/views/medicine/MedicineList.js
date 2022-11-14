import AppURL from 'api/AppURL';
import React, { useEffect, useState } from 'react'
import { Card, Table, Container, Row, Col, Button, Form } from "react-bootstrap";
import axios  from 'axios';
import Modal from 'react-bootstrap/Modal';
import MedicineModal from './Modal/MedicineModal';
import { Redirect } from 'react-router';

export default function MedicineList() {

  if (!localStorage.getItem('token')) {
    return <Redirect to="/login" />
}

  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState([]);

  const setShowEditModal = (data) => {
    setData(data);
    setShowModal(true);
  }

  const [medicine, setMedicine] = useState([]);

  useEffect(() => {
    axios.get(AppURL.MedicineList).then(response => {
      setMedicine(response.data);
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
                <Card.Title as="h4">Medicine List</Card.Title>
                <Button style={{float: 'right'}}onClick={() => setShowModal(true)}>Add New</Button>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                <thead>
                    <tr>
                        <th className="border-0">Type</th>
                        <th className="border-0">Name</th>
                        <th className="border-0">Strength</th>
                        <th className="border-0">Generic</th>
                        <th className="border-0">Supplier</th>
                        <th className="border-0">Action</th>
                    </tr>
                </thead>   

                {
                    medicine.map((item,i) =>
                        <tbody  key={i}>
                            <tr>
                                <td>{item.medicinetype.short_name}</td>
                                <td>{item.name}</td>
                                <td>{item.strength.name}</td>
                                <td>{item.generic.name}</td>
                                <td>{item.supplier.name}</td>
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

      <MedicineModal data={data} show={showModal} setShow={setShowModal} />

    </>
  )
}
