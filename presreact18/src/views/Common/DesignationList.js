import AppURL from 'api/AppURL';
import React, { useEffect, useState } from 'react'
import { Card, Table, Container, Row, Col } from "react-bootstrap";
import axios  from 'axios';

export default function DesignationList() {

  const [designation, setDesignation] = useState([]);

  useEffect(() => {
    axios.get(AppURL.DesignationList).then(response => {
      setDesignation(response.data);
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
                <Card.Title as="h4">Designation List</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                <thead>
                    <tr>
                        <th className="border-0">Designation Code</th>
                        <th className="border-0">Name</th>
                        <th className="border-0">Short Name</th>
                    </tr>
                </thead>   

                {
                    designation.map((item,i) =>
                        <tbody  key={i}>
                            <tr>
                                <td>{item.designation_code}</td>
                                <td>{item.name}</td>
                                <td>{item.short_name}</td>
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
