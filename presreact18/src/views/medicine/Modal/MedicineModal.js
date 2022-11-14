import AppURL from 'api/AppURL';
import React, { useEffect, useState } from 'react'
import { Card, Table, Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import axios  from 'axios';

export default function MedicineModal({data,show,setShow}) {

  const [name,setName] = useState("");
  const [supplier_id,setSupplierId] = useState("");
  const [generic_id,setGenericId] = useState("");
  const [strength_id,setStrengthId] = useState("");
  const [medicine_type_id,setMedicineTypeId] = useState("");
  const [side_effect,setEffect] = useState("");
  const [user_id,setUserId] = useState("");

  const [medicine, setMedicine] = useState([]);
  const [supplier, setSupplier] = useState([]);
  const [generic, setGeneric] = useState([]);
  const [strength, setStrength] = useState([]);
  const [medicinetype, setMedicineType] = useState([]);

  useEffect(() => {
    axios.get(AppURL.MedicineList).then(response => {
      setMedicine(response.data);
    }).catch(error => {

    });

    axios.get(AppURL.MedicineTypeList).then(response => {
      setMedicineType(response.data);
    }).catch(error => {

    });

    axios.get(AppURL.StrengthList).then(response => {
      setStrength(response.data);
    }).catch(error => {

    });

    axios.get(AppURL.SupplierList).then(response => {
      setSupplier(response.data);
    }).catch(error => {

    });

    axios.get(AppURL.GenericList).then(response => {
      setGeneric(response.data);
    }).catch(error => {

    });
  }, [])

  async function addNewMedicine()
  {
    
    console.warn(name,supplier_id,generic_id,strength_id,medicine_type_id,side_effect,user_id);
    const formData = new FormData();
    formData.append('name',name);
    formData.append('supplier_id',supplier_id);
    formData.append('generic_id',generic_id);
    formData.append('strength_id',strength_id);
    formData.append('medicine_type_id',medicine_type_id);
    formData.append('side_effect',side_effect);
    formData.append('user_id',1);

    let result = await fetch("http://localhost:8000/api/AddMedicines",{
      method: 'POST',
      body: formData
    });

    alert("Data Save Successfully");
    setName("");
    setShow(false);
  }


  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
          <Modal.Title>Add Medicine</Modal.Title>
        </Modal.Header>

        <Modal.Body>  
          <Form>
            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Medicine Type</Form.Label>
                <Form.Select onChange={(e) => setMedicineTypeId(e.target.value)} className="form-control">
                <option>Select Medicine Type</option>
                {
                    medicinetype.map((item,i) =>
                    <option key={i} value={item.id}>{item.short_name}</option>
                    )
                }
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Strength</Form.Label>
                <Form.Select onChange={(e) => setStrengthId(e.target.value)} className="form-control">
                <option>Select Strength</option>
                {
                    strength.map((item,i) =>
                    <option key={i} value={item.id}>{item.name}</option>
                    )
                }
                </Form.Select>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Generic</Form.Label>
                <Form.Select onChange={(e) => setGenericId(e.target.value)} className="form-control">
                <option>Select Generic</option>
                {
                    generic.map((item,i) =>
                    <option key={i} value={item.id}>{item.name}</option>
                    )
                }
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Supplier</Form.Label>
                <Form.Select onChange={(e) => setSupplierId(e.target.value)} className="form-control">
                <option>Select Supplier</option>
                {
                    supplier.map((item,i) =>
                    <option key={i} value={item.id}>{item.name}</option>
                    )
                }
                </Form.Select>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Side Effect</Form.Label>
                <Form.Control onChange={(e) => setEffect(e.target.value)} placeholder="Side Effect" />
            </Form.Group>
            </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button type="submit" onClick={addNewMedicine}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
