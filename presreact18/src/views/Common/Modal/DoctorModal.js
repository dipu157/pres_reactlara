import AppURL from 'api/AppURL';
import React, { useEffect, useState } from 'react'
import { Card, Table, Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import axios  from 'axios';

export default function DoctorModal({data,show,setShow}) {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [department_id,setDepartmentId] = useState("");
    const [designation_id,setDesignationId] = useState("");
    const [degrees,setDegrees] = useState("");
    const [user_id,setUser] = useState("");

    const [department, setDepartment] = useState([]);
    const [designation, setDesignation] = useState([]);

    
  
    useEffect(() =>{
      if(data){
      setName(data.name);
      setEmail(data.email);
      setPhone(data.phone);
      setDepartmentId(data.department_id);
      setDesignationId(data.designation_id);
      setDegrees(data.degrees);
      }
      return () => {
        setName("");
        setEmail("");
        setPhone("");
        setDepartmentId("");
        setDesignationId("");
        setDegrees("");
      }
    },[data]);

    useEffect(() => {
    
        axios.get(AppURL.DepartmentList).then(response => {
          setDepartment(response.data);
        }).catch(error => {
    
        });
    
        axios.get(AppURL.DesignationList).then(response => {
          setDesignation(response.data);
        }).catch(error => {
    
        });
      }, [])

    async function saveDoctor(e,id)
  {
    e.preventDefault();
    // alert(name+email+phone+department_id+designation_id+degrees+user_id);
    console.warn(name,email,phone,department_id,designation_id,degrees,user_id);
    const formData = new FormData();
    formData.append('name',name);
    formData.append('email',email);
    formData.append('phone',phone);
    formData.append('department_id',department_id);
    formData.append('designation_id',designation_id);
    formData.append('degrees',degrees);
    formData.append('user_id',1);

    const result = await axios.post(!id ? AppURL.DoctorAdd : AppURL.DoctorEdit(id),formData);

    alert("Data Save Successfully");
  }


  return (
    <Modal show={show} onHide={() => setShow(false)}>
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
          <Button onClick={() => setShow(false)}> Close </Button>

          <Button type="submit" onClick={(e) => saveDoctor(e,data.id) } className='btn btn-primary float-right'>
              SAVE
          </Button>
          </Modal.Footer>
            
      </Modal>
  )
}
