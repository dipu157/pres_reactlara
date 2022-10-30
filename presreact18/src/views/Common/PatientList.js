import AppURL from 'api/AppURL';
import React, { useEffect, useState } from 'react'
import { Card, Table, Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import axios  from 'axios';

export default function PatientList() {

  const [show, setShow] = useState(false);

  const [full_name,setFullName] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");
  const [dob,setDob] = useState("");
  const [blood_group,setBloodGroup] = useState("");
  const [gender,setGender] = useState("");
  const [user_id,setUser] = useState("");

  const patientAddClose = () => setShow(false);
  const patientAddShow = () => setShow(true);

  const [patient, setPatient] = useState([]);

  useEffect(() => {
    axios.get(AppURL.PatientList).then(response => {
        setPatient(response.data);
    }).catch(error => {

    });
  }, [])

  async function addNewPatient()
  {
    
    console.warn(full_name,phone,address,dob,blood_group,gender,user_id);
    const formData = new FormData();
    formData.append('full_name',full_name);
    formData.append('phone',phone);
    formData.append('address',address);
    formData.append('dob',dob);
    formData.append('blood_group',blood_group);
    formData.append('gender',gender);
    formData.append('user_id',1);

    let result = await fetch("http://localhost:8000/api/addnewpatient",{
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
                <Card.Title as="h4">Patient List</Card.Title>
                <Button style={{float: 'right'}} onClick={patientAddShow}>Add New</Button>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                <thead>
                    <tr>
                        <th className="border-0">Name</th>
                        <th className="border-0">Phone</th>
                        <th className="border-0">Age</th>
                        <th className="border-0">Gender</th>
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


      <Modal show={show} onHide={patientAddClose}>
      <Modal.Header closeButton>
          <Modal.Title>Add Patient</Modal.Title>
        </Modal.Header>

        <Modal.Body>  
          <Form>
            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Phone" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control onChange={(e) => setDob(e.target.value)} type="date"/>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Blood Group</Form.Label>
                <Form.Select onChange={(e) => setBloodGroup(e.target.value)} className="form-control">
                <option selected>Selece blood Group</option>
                <option value="a+">A+</option>
                <option value="a-">A-</option>
                <option value="b+">B+</option>
                <option value="b-">B-</option>
                <option value="ab+">AB+</option>
                <option value="ab-">AB-</option>
                <option value="o+">o+</option>
                <option value="o-">AB-</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Gender</Form.Label>
                <Form.Select onChange={(e) => setGender(e.target.value)} className="form-control">
                <option selected>Selece Gender</option>
                <option value="m">Male</option>
                <option value="f">FeMale</option>
                </Form.Select>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
            </Form.Group>
            </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={patientAddClose}>
            Close
          </Button>
          <Button type="submit" onClick={addNewPatient}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
