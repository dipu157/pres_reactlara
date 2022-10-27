import axios from 'axios';
import ChamberAll from 'components/Body/Common/ChamberAll';
import React, { useEffect, useState } from 'react'
import { Card, Table, Container, Row, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function ChamberList() {

  // const [show, setShow] = useState(false);

  // const chamberAddClose = () => setShow(false);
  // const chamberAddShow = () => setShow(true);

  // const [name,setName] = useState("");
  // const [address,setAddress] = useState("");
  // const [phone,setPhone] = useState("");
  // const [email,setEmail] = useState("");
  // const [city,setCity] = useState("");
  // const [country,setCountry] = useState("");
  // const [website,setWebsite] = useState("");
  // const [user_id,setUserId] = useState("");

  // function addChamber()
  // {
    
  //   console.warn(name,address,phone,email,city,country,website,user_id);

  //   const formData = new FormData();

  //   formData.append('name',name);
  //   formData.append('address',address);
  //   formData.append('phone',phone);
  //   formData.append('email',email);
  //   formData.append('city',city);
  //   formData.append('country',country);
  //   formData.append('website',website);
  //   formData.append('user_id',user_id);

  //   useEffect(() => {
  //     axios.post(AppURL.ChamberAdd).then(response => {
  //       alert("Save Successfully");
  //     }).catch(error => {
  
  //     });
  //   }, []);

  //   alert("Data Save Successfully");
  // }

  return (
    <>
        <Container fluid>
        <Row>
          
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Chmber List</Card.Title>
                <Button style={{float: 'right'}} onClick={chamberAddShow}>Add Chamber</Button>
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


      {/* <Modal show={show} onHide={chamberAddClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Chamber</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form> 
            <Row>
              <Col className="pr-1" md="12">
                <Form.Group>
                  <label>Name</label>
                  <Form.Control
                    placeholder="Chamber Name"
                    type="text" name='name' onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <Form.Group>
                  <label>Address</label>
                  <Form.Control
                    placeholder="Home Address"
                    type="text" name="address" onChange={(e) => setAddress(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="pr-1" md="6">
                <Form.Group>
                  <label>Phone</label>
                  <Form.Control
                    placeholder="Phone"
                    type="text" name="phone" onChange={(e) => setPhone(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col className="pr-1" md="6">
                <Form.Group>
                  <label>Email</label>
                  <Form.Control
                    placeholder="Email"
                    type="email" name="email" onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="pr-1" md="4">
                <Form.Group>
                  <label>City</label>
                  <Form.Control
                    placeholder="City"
                    type="text" name="city" onChange={(e) => setCity(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col className="px-1" md="4">
                <Form.Group>
                  <label>Country</label>
                  <Form.Control
                    placeholder="Country"
                    type="text" name="country" onChange={(e) => setCountry(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col className="pl-1" md="4">
                <Form.Group>
                  <label>Website</label>
                  <Form.Control
                    placeholder="Website"
                    type="text" name="website" onChange={(e) => setWebsite(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col className="pl-1" md="4">
                <Form.Group>
                  <label>User ID</label>
                  <Form.Control
                    type="text" value="1" onChange={(e) => setUserId(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <div className="clearfix"></div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={chamberAddClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addChamber}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  )
}
