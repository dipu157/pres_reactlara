import AppURL from 'api/AppURL';
import React, { useEffect, useState } from 'react'
import { Card, Table, Container, Row, Col, Button } from "react-bootstrap";
import axios  from 'axios';
import Modal from 'react-bootstrap/Modal';

export default function DepartmentList() {

  const [show, setShow] = useState(false);

  const [name,setName] = useState("");
  const [short_name,setShortName] = useState("");
  const [description,setDescription] = useState("");
  const [user_id,setUser] = useState("");

  const deptAddClose = () => setShow(false);
  const deptAddShow = () => setShow(true);

  const [department, setDepartment] = useState([]);

  useEffect(() => {
    axios.get(AppURL.DepartmentList).then(response => {
      setDepartment(response.data);
    }).catch(error => {

    });
  }, [])

  async function addNewDepartment()
  {
    
    console.warn(name,short_name,description,user_id);
    const formData = new FormData();
    formData.append('name',name);
    formData.append('short_name',short_name);
    formData.append('description',description);
    formData.append('user_id',1);

    let result = await fetch("http://localhost:8000/api/storedepartment",{
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
                <Card.Title as="h4">Department List</Card.Title>
                <Button style={{float: 'right'}} onClick={deptAddShow}>Add New</Button>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                <thead>
                    <tr>
                        <th className="border-0">Department Code</th>
                        <th className="border-0">Name</th>
                        <th className="border-0">Short Name</th>
                    </tr>
                </thead>   

                {
                    department.map((item,i) =>
                        <tbody  key={i}>
                            <tr>
                                <td>{item.department_code}</td>
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
      <h3 className='mt-5 ml-5 text-center'>Add Department</h3> 
          <div className='m-5'>
            <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name" /> <br />
            <input type="text" onChange={(e) => setShortName(e.target.value)} className="form-control" placeholder="Short Name" /> <br />
            <input type="text" onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="Description" /> <br />
            <button onClick={addNewDepartment} className='btn btn-primary float-right'>ADD</button>
          </div>
      </Modal>
    </>
  )
}
