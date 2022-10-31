import axios from 'axios';
import ChamberAll from 'components/Body/Common/ChamberAll';
import React, { useEffect, useState } from 'react'
import { Card, Table, Container, Row, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import AppURL from 'api/AppURL';

export default function ChamberList() {

  const [show, setShow] = useState(false);

  const chamberAddClose = () => setShow(false);
  const chamberAddShow = () => setShow(true);

  const [name,setName] = useState("");
  const [address,setAddress] = useState("");
  const [phone,setPhone] = useState("");
  const [city,setCity] = useState("");
  const [user_id,setUserId] = useState("");

  const [chamber, setChamber] = useState([]);

  useEffect(() => {
    axios.get(AppURL.ChamberList).then(response => {
      setChamber(response.data);
    }).catch(error => {

    });
  }, [])

  async function addChamber()
  {
    
    console.warn(name,address,phone,city,user_id);

    const formData = new FormData();

    formData.append('name',name);
    formData.append('address',address);
    formData.append('phone',phone);
    formData.append('city',city);
    formData.append('user_id',1);

    let result = await fetch("http://localhost:8000/api/storechamberaddress",{
      method: 'POST',
      body: formData
    });
    alert("Data Save Successfully");
  }

  return (
    <>
        <Container fluid>
        <Row>
          
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Chamber List</Card.Title>
                <Button style={{float: 'right'}} onClick={chamberAddShow}>Add New</Button>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                <thead>
                    <tr>
                        <th className="border-0">Name</th>
                        <th className="border-0">Address</th>
                        <th className="border-0">Phone</th>
                        <th className="border-0">City</th>
                    </tr>
                </thead>   

                {
                    chamber.map((item,i) =>
                        <tbody  key={i}>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td>{item.phone}</td>
                                <td>{item.city}</td>
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


      <Modal show={show} onHide={chamberAddClose}>
      <h3 className='mt-5 ml-5 text-center'>Add Doctor</h3>
      <div className='m-5'>
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
                  placeholder="Address"
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
                <label>City</label>
                <Form.Control
                  placeholder="City"
                  type="text" name="city" onChange={(e) => setCity(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <div className="clearfix"></div>

          <Button type="submit" onClick={addChamber} className='btn btn-primary float-right mt-2'>
              ADD
          </Button>
        </Form>
      </div>
      </Modal>
    </>
  )
}
