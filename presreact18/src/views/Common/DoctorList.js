import AppURL from 'api/AppURL';
import React, { useEffect, useState } from 'react'
import { Card, Table, Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import axios  from 'axios';

export default function DoctorList() {

  const [show, setShow] = useState(false);

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [department_id,setDepartment] = useState("");
  const [designation_id,setDesignation] = useState("");
  const [dob,setDob] = useState("");
  const [blood_group,setBloodGroup] = useState("");
  const [about_me,setAbout] = useState("");
  const [image,setImage] = useState("");
  const [experience,setExperience] = useState("");
  const [speciality,setSpeciality] = useState("");
  const [degrees,setDegrees] = useState("");
  const [user_id,setUser] = useState("");

  const doctorAddClose = () => setShow(false);
  const doctorAddShow = () => setShow(true);

  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    axios.get(AppURL.DoctorList).then(response => {
        setDoctor(response.data);
    }).catch(error => {

    });
  }, [])

  async function addNewDoctor()
  {
    
    console.warn(name,email,phone,department_id,designation_id,degrees,user_id);
    const formData = new FormData();
    formData.append('name',name);
    formData.append('email',email);
    formData.append('department_id',1);
    formData.append('designation_id',1);
    formData.append('degrees',degrees);
    formData.append('user_id',1);

    let result = await fetch("http://localhost:8000/api/addnewdoctor",{
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
                <Card.Title as="h4">Doctor List</Card.Title>
                <Button style={{float: 'right'}} onClick={doctorAddShow}>Add New</Button>
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
                    </tr>
                </thead>   

                {
                    doctor.map((item,i) =>
                        <tbody  key={i}>
                            <tr>
                                <td>{item.image}</td>
                                <td>{item.name}</td>
                                <td>{item.department_id}</td>
                                <td>{item.designation_id}</td>
                                <td>{item.speciality}</td>
                                <td>{item.degrees}</td>
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


      <Modal show={show} onHide={doctorAddClose}>
      <h3 className='mt-5 ml-5 text-center'>Add Doctor</h3> 
          {/* <div className='m-5'>
            <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" 
            placeholder="Name" /> <br />
            <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" 
            placeholder="Email" /> <br />
            <input type="number" onChange={(e) => setPhone(e.target.value)} className="form-control" 
            placeholder="Phone" /> <br />
            <button onClick={addNewDoctor} className='btn btn-primary float-right'>ADD</button>
          </div> */}

        <div className='m-5'>   
          <Form>
            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e) => setName(e.target.value)} placeholder="Doctor Name" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Phone" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Degrees</Form.Label>
                <Form.Control onChange={(e) => setDegrees(e.target.value)} placeholder="Degrees" />
            </Form.Group>

            {/* <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Department</Form.Label>
                <Form.Select onSelect={(e) => setDepartment(e.target.value)} className='form-control'>
                    <option value="1">Department</option>    
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Designation</Form.Label>
                <Form.Select onSelect={(e) => setDesignation(e.target.value)} className='form-control'>
                    <option value="1">Designation</option>    
                </Form.Select>
                </Form.Group>
            </Row>             */}

            <Button type="submit" onClick={addNewDoctor} className='btn btn-primary float-right'>
                ADD
            </Button>
            </Form>
        </div>
      </Modal>
    </>
  )
}
