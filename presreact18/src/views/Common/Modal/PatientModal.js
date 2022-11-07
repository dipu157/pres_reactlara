import AppURL from 'api/AppURL';
import React, { useEffect, useState } from 'react'
import { Card, Table, Container, Row, Col, Button, Form, Modal, FormControl } from "react-bootstrap";
import axios  from 'axios';
// import Select from 'react-select';

export default function PatientModal({data,show,setShow}) {

    const [full_name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [dob,setDob] = useState("");
    const [blood_group,setBloodGroup] = useState("");
    const [gender,setGender] = useState("");
    const [user_id,setUser] = useState("");

    useEffect(() =>{
        if(data){
        setName(data.full_name);
        setEmail(data.email);
        setPhone(data.phone);
        setAddress(data.address);
        setDob(data.dob);
        setBloodGroup(data.blood_group);
        setGender(data.gender);
        }
        return () => {
          setName("");
          setEmail("");
          setPhone("");
          setAddress("");
          setDob("");
          setBloodGroup("");
          setGender("");
        }
      },[data]);
  
  
      async function savePatient(e,id)
    {
      e.preventDefault();
      // alert(name+email+phone+department_id+designation_id+degrees+user_id);
      console.warn(full_name,email,phone,address,dob,blood_group,gender,user_id);
      const formData = new FormData();
      formData.append('full_name',full_name);
      formData.append('email',email);
      formData.append('phone',phone);
      formData.append('address',address);
      formData.append('dob',dob);
      formData.append('blood_group',blood_group);
      formData.append('gender',gender);
      formData.append('user_id',1);
  
      const result = await axios.post(!id ? AppURL.PatientAdd : AppURL.PatientEdit(id),formData);
        
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setDob("");
      setBloodGroup("");
      setGender("");
      alert("Data Save Successfully");
      setShow(false);
      window.location.reload();
    }

    // const bloodGroups = [
    //     { value: 'a+', label: 'A+' },
    //     { value: 'a-', label: 'A-' },
    //     { value: 'b+', label: 'B+' },
    //     { value: 'b-', label: 'B-' },
    //     { value: 'ab+', label: 'AB+' },
    //     { value: 'ab-', label: 'AB-' },
    //     { value: 'o+', label: 'O+' },
    //     { value: 'o-', label: 'O-' }
    //   ];


  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
          <Modal.Title>Add Patient</Modal.Title>
        </Modal.Header>

        <Modal.Body>  
          <Form>
          <Form.Control type="hidden" defaultValue={data.id} readOnly />
            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e) => setName(e.target.value)} placeholder="Full Name" defaultValue={full_name} />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Phone" defaultValue={phone} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control onChange={(e) => setDob(e.target.value)} type="date" defaultValue={dob} />
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
                <option value="o+">O+</option>
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
                <Form.Control onChange={(e) => setAddress(e.target.value)} placeholder="Address" defaultValue={address} />
            </Form.Group>
            </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button type="submit" onClick={(e) => savePatient(e,data.id) }>
            ADD
          </Button>
        </Modal.Footer>
            
      </Modal>
  )
}
