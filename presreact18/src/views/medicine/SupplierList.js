import AppURL from 'api/AppURL';
import React, { useEffect, useState } from 'react'
import { Card, Table, Container, Row, Col, Button } from "react-bootstrap";
import axios  from 'axios';
import Modal from 'react-bootstrap/Modal';
import { Redirect } from 'react-router';

export default function SupplierList() {

  if (!localStorage.getItem('token')) {
    return <Redirect to="/login" />
}

  const [show, setShow] = useState(false);

  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [contact_person_details,setContactPerson] = useState("");
  const [user_id,setUser] = useState("");

  const suppAddClose = () => setShow(false);
  const suppAddShow = () => setShow(true);

  const [supplier, setSupplier] = useState([]);

  useEffect(() => {
    axios.get(AppURL.SupplierList).then(response => {
      setSupplier(response.data);
    }).catch(error => {

    });
  }, [])

  async function addNewSupplier()
  {
    
    console.warn(name,phone,contact_person_details,user_id);
    const formData = new FormData();
    formData.append('name',name);
    formData.append('phone',phone);
    formData.append('contact_person_details',contact_person_details);
    formData.append('user_id',1);

    let result = await fetch("http://localhost:8000/api/addsupplier",{
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
                <Card.Title as="h4">Supplier List</Card.Title>
                <Button style={{float: 'right'}} onClick={suppAddShow}>Add New</Button>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                <thead>
                    <tr>
                        <th className="border-0">Name</th>
                        <th className="border-0">Phone</th>
                        <th className="border-0">Contact Person</th>
                        <th className="border-0">Action</th>
                    </tr>
                </thead>   

                {
                    supplier.map((item,i) =>
                        <tbody  key={i}>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.contact_person_details}</td>
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


      <Modal show={show} onHide={suppAddClose}>
      <h3 className='mt-5 ml-5 text-center'>Add Supplier</h3> 
          <div className='m-5'>
            <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name" /> <br />
            <input type="text" onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="Phone" /> <br />
            <input type="text" onChange={(e) => setContactPerson(e.target.value)} className="form-control" placeholder="Contact Person" /> <br />
            <button onClick={addNewSupplier} className='btn btn-primary float-right'>ADD</button>
          </div>
      </Modal>
    </>
  )
}
