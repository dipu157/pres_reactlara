import AppURL from 'api/AppURL';
import React, { useEffect, useState } from 'react'
import { Card, Table, Container, Row, Col, Button, Form } from "react-bootstrap";
import axios  from 'axios';
import Modal from 'react-bootstrap/Modal';

export default function DesignationList() {

  const [show, setShow] = useState(false);

  const [name,setName] = useState("");
  const [short_name,setShortName] = useState("");
  const [description,setDescription] = useState("");
  const [user_id,setUser] = useState("");

  const deptAddClose = () => setShow(false);
  const deptAddShow = () => setShow(true);

  const [designation, setDesignation] = useState([]);

  useEffect(() => {
    axios.get(AppURL.DesignationList).then(response => {
      setDesignation(response.data);
    }).catch(error => {

    });
  }, [])

  async function addNewDesignation()
  {
    
    console.warn(name,short_name,description,user_id);
    const formData = new FormData();
    formData.append('name',name);
    formData.append('short_name',short_name);
    formData.append('description',description);
    formData.append('user_id',1);

    let result = await fetch("http://localhost:8000/api/storedesignation",{
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
                <Card.Title as="h4">Designation List</Card.Title>
                <Button style={{float: 'right'}} onClick={deptAddShow}>Add New</Button>
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

      <Modal show={show} onHide={deptAddClose}>
      <h3 className='mt-5 ml-5 text-center'>Add Designation</h3> 
          <div className='m-5'>
          <Form> 
          <Row>
            <Col className="pr-1" md="12">
              <Form.Group>
                <label>Name</label>
                <Form.Control
                  placeholder="Designation Name"
                  type="text" onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Form.Group>
                <label>Short Name</label>
                <Form.Control
                  placeholder="Short Name"
                  type="text" onChange={(e) => setShortName(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="pr-1" md="12">
              <Form.Group>
                <label>Description</label>
                <Form.Control
                  placeholder="Description"
                  type="text" onChange={(e) => setDescription(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <div className="clearfix"></div>

          <Button type="submit" onClick={addNewDesignation} className='btn btn-primary float-right mt-2'>
              ADD
          </Button>
        </Form>
        </div>
      </Modal>
    </>
  )
}
