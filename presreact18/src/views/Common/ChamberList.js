import ChamberAll from 'components/Body/Common/ChamberAll';
import React from 'react'
import { Card, Table, Container, Row, Col } from "react-bootstrap";

export default function ChamberList() {

  return (
    <>
        <Container fluid>
        <Row>
          
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Chmber List</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <ChamberAll />
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
