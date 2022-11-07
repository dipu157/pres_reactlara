import React from 'react'
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import PatientModal from 'views/common/Modal/PatientModal';
import AdviceModal from '../Modal/AdviceModal';
import InvestigationModal from '../Modal/InvestigationModal';
import ComplainModal from './Modal/ComplainModal';
import DiagnosisModal from './Modal/DiagnosisModal';
import axios from 'axios';
import AppURL from 'api/AppURL';
import { useEffect } from 'react';

export default function NewPrescription() {

  const [showPatientModal, setPatientModal] = useState(false);
  const [showComplainModal, setComplainModal] = useState(false);
  const [showOEModal, setOEModal] = useState(false);
  const [showDiagnosisModal, setDiagnosisModal] = useState(false);
  const [showInvestigationModal, setInvestigationModal] = useState(false);
  const [showAdviceModal, setAdviceModal] = useState(false);
  const [showMedicineModal, setMedicineModal] = useState(false);

  const [data, setData] = useState([]);

  const setPatientEditModal = (data) => {
    setData(data);
    setPatientModal(true);
  }

  const [patients, setPatients] = useState([]);
  const [suggessions, setSuggessions] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    axios.get(AppURL.PatientList).then(response => {
        setPatients(response.data);
        console.warn(response.data);
    });
  }, [])

  const searchPatient = (text) => 
  {
    let matches = []
    if(text.length > 0){
      matches = patients.filter(patient => {
        const regex = new RegExp(`${text}`, "gi");
        return patient.full_name.match(regex)
      })
    }

    console.log('matches',matches)
    setSuggessions(matches)
    setText(text)
  }

  const selectPatient = (text) => {
    setText(text);
    setSuggessions([]);
  }


  return (
    <>
      <div style={{ backgroundColor: '#F0FFFF' }} className='col-12 card'> 

      <div className="row">
        <Card style={{ width: '50%' }}>
          <Card.Body>
            <Card.Title>ডাঃ রেজা আহমেদ</Card.Title>
            <Card.Text>
              এম.বি.বি.এস (ডিএমসি), এমডি(মেডিসিন) <br />
              ডিপার্টমেণ্ট অব কার্ডিওলজি <br />
              জাতীয় হৃদরোগ ইন্সটিটিউট
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '50%' }}>
          <Card.Body>
            <Card.Title className=' text-right'>Dr. Reja Ahmed</Card.Title>
            <Card.Text className=' text-right'>
              MBBS (DMC), MD(Medicine) <br />
              Department of Cardiology <br />
              National Institute of Cardio Vascular Disease
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <button className='btn btn-default' onClick={() => setPatientModal(true)}>New Patient +</button> <br/>

      <div className="row mt-3">
          <input type="hidden" name="patient_code" className="form-control col-1" />
          
          <div className=' col-4'>  Patient Name : 
          <input type="text" className="form-control" placeholder='search by name,code,phone..' 
          onChange={e => searchPatient(e.target.value) } />

          {suggessions && suggessions.map((suggestion, i) =>
          <div key={i} onClick={() => selectPatient(suggestion.full_name)}>{suggestion.full_name}</div>
          )} </div>
          
          <div className=' col-2'>  Age : <input type="text" name="age" className="form-control" />   </div> 
          <div className=' col-2'>  Gender : <input type="text" name="gender" className="form-control" />  </div> 
          <div className=' col-3'>  Phone No : <input type="text" name="phone" className="form-control" /> </div>
      </div>

      <div className="row mt-5">
          <div className='col-4 border-right'> 
              <span>Chief Complain <button onClick={() => setComplainModal(true)} className='btn btn-sm'> + </button> </span>
              <p id="ccID"></p>

              <p className='mt-5'>On Examination <button onClick={() => setOEModal(true)} className='btn btn-sm'> + </button></p>
              <p id="oeID"></p>


              <p className='mt-5'>Diagnosis <button onClick={() => setDiagnosisModal(true)} className='btn btn-sm'> + </button></p>
              <p id="diagnosisID"></p>


              <p className='mt-5'>Investigation <button onClick={() => setInvestigationModal(true)} className='btn btn-sm'> + </button></p>
              <InputGroup className="mb-3">
              <Form.Control name="advice" placeholder='Investigation' />
              <Button className='btn btn-sm btn-default'>ADD</Button>
            </InputGroup>
              <p id="investigationID"></p>


              <p className='mt-5'>Next Follow Up </p>
              <input type='text' className="form-control mb-2" placeholder="Next Visiting Remark" name="follow-up" />
          </div>

          <div className='col-8'>
            <p style={{ fontSize: "26px" }}>Rx <button onClick={() => setMedicineModal(true)} className='btn btn-sm'> + </button> </p>
            <div className='row'>
            <InputGroup>
              <Form.Control name='medicine' id="medicine" placeholder='Medicine Name' />
              <Form.Control name="dose" placeholder='Dose' />
              <Form.Control name="duration" placeholder='Duration' />
              <Form.Control name="m_advice" placeholder='Instruction' />
              <Button className='btn btn-sm btn-default'>ADD</Button>
            </InputGroup>
            </div>

            <div className='row'>
              <InputGroup className="mt-5 mb-5">
                <Form.Control type='hidden' id='medicine' />
                <Form.Control type='hidden' id="dose" />
                <Form.Control type='hidden' id="duration" />
                <Form.Control type='hidden' id="m_advice" />
              </InputGroup>
            </div>
                

            <span style={{ fontSize: "18px" }} className='mt-5'>Advice <button onClick={() => setAdviceModal(true)} className='btn btn-sm'> + </button></span>
            <InputGroup className="mb-3">
              <Form.Control name="advice" placeholder='Advice' />
              <Button className='btn btn-sm btn-default'>ADD</Button>
            </InputGroup>
          </div>

          <p id='advice'></p>
      
      </div>

      <Button className='btn btn-block mb-3'>Save & Print</Button>
      
      </div>

      <PatientModal data={data} show={showPatientModal} setShow={setPatientModal} />
      <ComplainModal show={showComplainModal} setShow={setComplainModal} />
      <DiagnosisModal show={showDiagnosisModal} setShow={setDiagnosisModal} />
      <InvestigationModal data={data} show={showInvestigationModal} setShow={setInvestigationModal} />
      <AdviceModal data={data} show={showAdviceModal} setShow={setAdviceModal} />
    </>
  )
}
