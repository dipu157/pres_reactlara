import AppURL from "api/AppURL";
import React, { useEffect, useState } from "react";
import {
  Card,
  Table,
  Container,
  Row,
  Col,
  Button,
  Form,
} from "react-bootstrap";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";

export default function PrescriptionList() {
  if (!localStorage.getItem("token")) {
    return <Redirect to="/login" />;
  }

  let history = useHistory();

  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    axios
      .get(AppURL.PrescriptionList)
      .then((response) => {
        setPrescriptions(response.data);
      })
      .catch((error) => {});
  }, []);



  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Prescription List</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">Patient Name</th>
                      <th className="border-0">Visit Date</th>
                      <th className="border-0">Complain</th>
                      <th className="border-0">Diagnosis</th>
                      <th className="border-0">Medicine</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>

                  {prescriptions.map((item, i) => (
                    <tbody key={i}>
                      <tr>
                        <td>{item.patient.full_name}</td>
                        <td>{item.date}</td>
                        <td>{item.complain}</td>
                        <td>{item.diagnosis}</td>
                        <td>
                          {item.pmedicines.map((med, i) => 
                             med.medicine.name
                          ).join(", ")}
                        </td>
                        <td>
                          <Button onClick={() => {
                            history.push(`/viewpres/${item.id}`);
                          }} className="btn btn-primary">View</Button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* <pre>{JSON.stringify(prescriptions,null,2)}</pre> */}
      </Container>
    </>
  );
}
