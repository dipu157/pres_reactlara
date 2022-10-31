import AppURL from 'api/AppURL';
import React, { useEffect, useState } from 'react'
import { Card, Table, Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import axios  from 'axios';
import DoctorModal from './Doctor/Modal/DoctorModal';

export default function DoctorList() {

  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState([]);

  const setShowEditModal = (data) => {
    setData(data);
    setShowModal(true);
  }

  const [doctor, setDoctor] = useState([]);
 

  useEffect(() => {
    axios.get(AppURL.DoctorList).then(response => {
        setDoctor(response.data);
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
                <Card.Title as="h4">Doctor List</Card.Title>
                <Button style={{float: 'right'}} onClick={() => setShowModal(true)}>Add New</Button>
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
                        <th className="border-0">Action</th>
                    </tr>
                </thead>   

                {
                    doctor.map((item,i) =>
                        <tbody  key={i}>
                            <tr>
                                <td>{item.image}</td>
                                <td>{item.name}</td>
                                <td>{item.department.name}</td>
                                <td>{item.designation.name}</td>
                                <td>{item.speciality}</td>
                                <td>{item.degrees}</td>
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

      <DoctorModal data={data} show={showModal} setShow={setShowModal} />

  {/* Doctor Add Modal */}
      {/* <Modal show={show} onHide={doctorAddClose}>
      <h3 className='mt-5 ml-5 text-center'>Add Doctor</h3> 

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

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Department</Form.Label>
                <Form.Select onChange={(e) => setDepartmentId(e.target.value)} className="form-control">
                <option>Selece Department</option>
                {
                    department.map((item,i) =>
                    <option key={i} value={item.id}>{item.name}</option>
                    )
                }
                
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Designation</Form.Label>
                <Form.Select onChange={(e) => setDesignationId(e.target.value)} className="form-control">
                <option>Selece Designation</option>
                {
                    designation.map((item,i) =>
                    <option key={i} value={item.id}>{item.name}</option>
                    )
                }
                </Form.Select>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Degrees</Form.Label>
                <Form.Control onChange={(e) => setDegrees(e.target.value)} placeholder="Degrees" />
            </Form.Group>

            <Button type="submit" onClick={addNewDoctor} className='btn btn-primary float-right'>
                ADD
            </Button>
          </Form>
        </div>
      </Modal> */}


     {/* Doctor Edit Modal */}
      {/* <Modal show={edit} onHide={doctorEditClose}>
      <h3 className='mt-5 ml-5 text-center'>Update Doctor</h3> 
      <Modal.Body> 
        <Form>
        <Form.Control defaultValue={data.id} readOnly />
            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e) => setName(e.target.value)} defaultValue={name} />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={(e) => setEmail(e.target.value)} defaultValue={email} type="email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control onChange={(e) => setPhone(e.target.value)} defaultValue={phone} type="text" />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Department</Form.Label>
                <Form.Select onChange={(e) => setDepartmentId(e.target.value)} className="form-control">
                <option>Selece Department</option>
                {
                    department.map((item,i) =>
                    <option selected={department_id == item.id} key={i} value={item.id}>{item.name}</option>
                    )
                }
                
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Designation</Form.Label>
                <Form.Select onChange={(e) => setDesignationId(e.target.value)} className="form-control">
                <option>Selece Designation</option>
                {
                    designation.map((item,i) =>
                    <option selected={designation_id == item.id} key={i} value={item.id}>{item.name}</option>
                    )
                }
                </Form.Select>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Degrees</Form.Label>
                <Form.Control onChange={(e) => setDegrees(e.target.value)} defaultValue={degrees} />
            </Form.Group>
            </Form>
          </Modal.Body>


          <Modal.Footer>
          <Button onClick={doctorEditClose}> Close </Button>

          <Button type="submit" onClick={() => updateBtn(data.id)} className='btn btn-primary float-right'>
              Update
          </Button>
          </Modal.Footer>
            
      </Modal> */}
    </>
  )
}
