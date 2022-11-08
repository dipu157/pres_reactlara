import AppURL from 'api/AppURL';
import React, { useEffect, useState } from 'react'
import { Card, Table, Container, Row, Col, Button, Form } from "react-bootstrap";
import axios  from 'axios';
import Modal from 'react-bootstrap/Modal';

export default function GenericList() {

  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState([]);

  const editShow = (data) => {
    setData(data);
    setEdit(true);
  }

  const [name,setName] = useState("");
  const [user_id,setUser] = useState("");

  const genAddClose = () => setShow(false);
  const genAddShow = () => setShow(true);

  const genEditClose = () => setEdit(false);

  const [generic, setGeneric] = useState([]);

  useEffect(() => {
    axios.get(AppURL.GenericList).then(response => {
      setGeneric(response.data);
    }).catch(error => {

    });
  }, [])

  async function addNewGeneric()
  {
    
    console.warn(name,user_id);
    const formData = new FormData();
    formData.append('name',name);
    formData.append('user_id',1);

    let result = await fetch("http://localhost:8000/api/addgeneric",{
      method: 'POST',
      body: formData
    });
    alert("Data Save Successfully");
    setShow(false);
    setName("");
    window.location.reload();
  }

  async function updateBtn(id)
    {
      console.warn(name,user_id);
      const formData = new FormData();
      formData.append('name',name);
      formData.append('user_id',1);

        let result = await fetch("http://localhost:8000/api/updategeneric/"+id,{
            method: 'POST',
            body: formData
        });
        alert("Data Updated Successfully");
    }

  return (
    <>
        <Container fluid>
        <Row>
          
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Generic List</Card.Title>
                <Button style={{float: 'right'}} onClick={genAddShow}>Add New</Button>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                <thead>
                    <tr>
                        <th className="border-0">Name</th>
                        <th className="border-0">Action</th>
                    </tr>
                </thead>   

                {
                    generic.map((item,i) =>
                        <tbody  key={i}>
                            <tr>
                                <td>{item.name}</td>
                                <td>
                                  <Button onClick={() => editShow(item)} className='btn btn-primary'>Edit</Button>
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


      <Modal show={show} onHide={genAddClose}>
      <h3 className='mt-5 ml-5 text-center'>Add Generic</h3> 
          <div className='m-5'>
            <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name" /> <br />
            <button onClick={addNewGeneric} className='btn btn-primary float-right'>ADD</button>
          </div>
      </Modal>

      <Modal show={edit} onHide={genEditClose}>
      <h3 className='mt-5 ml-5 text-center'>Update Generic</h3> 
        <Modal.Body>  
          <Form>
            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Name</Form.Label>
                <Form.Control defaultValue={data.id} readOnly />
                <Form.Control onChange={(e) => setName(e.target.value)} defaultValue={data.name} />
            </Form.Group>
            </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button type="submit" onClick={() => updateBtn(data.id)}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
