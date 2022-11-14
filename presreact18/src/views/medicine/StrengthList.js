import AppURL from 'api/AppURL';
import React, { useEffect, useState } from 'react'
import { Card, Table, Container, Row, Col, Button } from "react-bootstrap";
import axios  from 'axios';
import Modal from 'react-bootstrap/Modal';
import { Redirect } from 'react-router';

export default function StrengthList() {

  if (!localStorage.getItem('token')) {
    return <Redirect to="/login" />
}

  const [show, setShow] = useState(false);

  const [name,setName] = useState("");
  const [user_id,setUser] = useState("");

  const strengthAddClose = () => setShow(false);
  const strengthAddShow = () => setShow(true);

  const [strength, setStrength] = useState([]);

  useEffect(() => {
    axios.get(AppURL.StrengthList).then(response => {
      setStrength(response.data);
    }).catch(error => {

    });
  }, [])

  async function addNewStrength()
  {
    
    console.warn(name,user_id);
    const formData = new FormData();
    formData.append('name',name);
    formData.append('user_id',1);

    let result = await fetch("http://localhost:8000/api/addStrength",{
      method: 'POST',
      body: formData
    });
    alert("Data Save Successfully");
    setShow(false);
    setName("");
    window.location.reload();
  }


  return (
    <>
        <Container fluid>
        <Row>
          
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Strength List</Card.Title>
                <Button style={{float: 'right'}} onClick={strengthAddShow}>Add New</Button>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                <thead>
                    <tr>
                        <th className="border-0">Name</th>
                        <th className="border-0">Short Name</th>
                        <th className="border-0">Action</th>
                    </tr>
                </thead>   

                {
                    strength.map((item,i) =>
                        <tbody  key={i}>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.short_name}</td>
                                <td>
                                  <Button className='btn btn-primary'>Edit</Button>
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


      <Modal show={show} onHide={strengthAddClose}>
      <h3 className='mt-5 ml-5 text-center'>Add Strength</h3> 
          <div className='m-5'>
            <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name" /> <br />
            <button onClick={addNewStrength} className='btn btn-primary float-right'>ADD</button>
          </div>
      </Modal>
    </>
  )
}
