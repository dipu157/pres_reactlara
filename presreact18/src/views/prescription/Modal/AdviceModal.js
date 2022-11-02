import AppURL from 'api/AppURL';
import React, { useEffect, useState } from 'react'
import { Card, Table, Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import axios  from 'axios';

export default function AdviceModal({data,show,setShow}) {

    const [general_advice,setName] = useState("");
    const [remarks,setRemark] = useState("");
    const [user_id,setUser] = useState("");  
    
    useEffect(() =>{
      if(data){
      setName(data.general_advice);
      setRemark(data.remarks);
      }
      return () => {
        setName("");
        setRemark("");
      }
    },[data]);


    async function saveAdvice(e,id)
  {
    e.preventDefault();
    // alert(name+email+phone+department_id+designation_id+degrees+user_id);
    console.warn(general_advice,remarks,user_id);
    const formData = new FormData();
    formData.append('general_advice',general_advice);
    formData.append('remarks',remarks);
    formData.append('user_id',1);

    const result = await axios.post(!id ? AppURL.AdviceAdd : AppURL.AdviceEdit(id),formData);

    alert("Data Save Successfully");
  }


  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <h3 className='mt-5 ml-5 text-center'>Update Advice</h3> 
      <Modal.Body> 
        <Form>
        <Form.Control defaultValue={data.id} readOnly />
            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e) => setName(e.target.value)} defaultValue={general_advice} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Remarks</Form.Label>
                <Form.Control onChange={(e) => setRemark(e.target.value)} defaultValue={remarks} />
            </Form.Group>
            </Form>
          </Modal.Body>


          <Modal.Footer>
          <Button onClick={() => setShow(false)}> Close </Button>

          <Button type="submit" onClick={(e) => saveAdvice(e,data.id) } className='btn btn-primary float-right'>
              SAVE
          </Button>
          </Modal.Footer>
            
      </Modal>
  )
}
