import AppURL from 'api/AppURL';
import React, { useEffect, useState } from 'react'
import { Card, Table, Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import axios  from 'axios';
import InvestigationModal from './Modal/InvestigationModal';
import { Redirect } from 'react-router';

export default function InvestigationList() {

  if (!localStorage.getItem('token')) {
    return <Redirect to="/login" />
}

  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState([]);

  const setShowEditModal = (data) => {
    setData(data);
    setShowModal(true);
  }

  const [investigation, setInvestigation] = useState([]);
 

  useEffect(() => {
    axios.get(AppURL.InvestigationList).then(response => {
      setInvestigation(response.data);
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
                <Card.Title as="h4">Investigation List</Card.Title>
                <Button style={{float: 'right'}} onClick={() => setShowModal(true)}>Add New</Button>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                <thead>
                    <tr>
                        <th className="border-0">Name</th>
                        <th className="border-0">Remarks</th>
                        <th className="border-0">Action</th>
                    </tr>
                </thead>   

                {
                    investigation.map((item,i) =>
                        <tbody  key={i}>
                            <tr>
                                <td>{item.test_name}</td>
                                <td>{item.remarks}</td>
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

      <InvestigationModal data={data} show={showModal} setShow={setShowModal} />

    </>
  )
}
