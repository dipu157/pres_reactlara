import AppURL from 'api/AppURL';
import React, { useEffect, useState } from 'react'
import { Card, Table, Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import axios  from 'axios';
import AdviceModal from './Modal/AdviceModal'

export default function AdviceList() {

  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState([]);

  const setShowEditModal = (data) => {
    setData(data);
    setShowModal(true);
  }

  const [advice, setAdvice] = useState([]);
 

  useEffect(() => {
    axios.get(AppURL.AdviceList).then(response => {
      setAdvice(response.data);
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
                <Card.Title as="h4">Advice List</Card.Title>
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
                    advice.map((item,i) =>
                        <tbody  key={i}>
                            <tr>
                                <td>{item.general_advice}</td>
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

      <AdviceModal data={data} show={showModal} setShow={setShowModal} />

    </>
  )
}
