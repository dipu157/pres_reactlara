import AppURL from 'api/AppURL';
import React, { useEffect, useState } from 'react'
import { Card, Table, Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import axios  from 'axios';

export default function InvestigationModal({data,show,setShow}) {

    const [test_name,setName] = useState("");
    const [remarks,setRemark] = useState("");
    const [user_id,setUser] = useState("");
 
  
    useEffect(() =>{
      if(data){
      setName(data.test_name);
      setRemark(data.remarks);
      }
      return () => {
        setName("");
        setRemark("");
      }
    },[data]);

    async function saveInvestigation(e,id)
  {
    e.preventDefault();
    // alert(name+email+phone+department_id+designation_id+degrees+user_id);
    console.warn(test_name,remarks,user_id);
    const formData = new FormData();
    formData.append('test_name',test_name);
    formData.append('remarks',remarks);
    formData.append('user_id',1);

    const result = await axios.post(!id ? AppURL.InvestigationAdd : AppURL.InvestigationEdit(id),formData);

    setName("");
    setRemark("");
    alert("Data Save Successfully");
    setShow(false);
  }

  return (
     <Modal show={show} onHide={() => setShow(false)}>
      <h3 className='mt-5 ml-5 text-center'>Investigation Add/Update</h3> 
      <Modal.Body> 
        <Form>
        <Form.Control type="hidden" defaultValue={data.id} readOnly />
            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e) => setName(e.target.value)} defaultValue={test_name} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Remarks</Form.Label>
                <Form.Control onChange={(e) => setRemark(e.target.value)} defaultValue={remarks} />
            </Form.Group>
            </Form>
          </Modal.Body>


          <Modal.Footer>
          <Button onClick={() => setShow(false)}> Close </Button>

          <Button type="submit" onClick={(e) => saveInvestigation(e,data.id) } className='btn btn-primary float-right'>
              SAVE
          </Button>
          </Modal.Footer>
            
      </Modal>
  )
}
