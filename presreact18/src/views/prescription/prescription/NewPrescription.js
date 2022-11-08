import React from 'react'
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap'
import PatientModal from 'views/common/Modal/PatientModal';
import AdviceModal from '../Modal/AdviceModal';
import InvestigationModal from '../Modal/InvestigationModal';
import ComplainModal from './Modal/ComplainModal';
import DiagnosisModal from './Modal/DiagnosisModal';
import PatientComp from './Components/PatientComp';
import InvestigationComp from './Components/InvestigationComp';
import AdviceComp from './Components/AdviceComp';
import Medicinecomp from './Components/Medicinecomp';
import DoctorDetailsComp from './Components/DoctorDetailsComp';

export default function NewPrescription() {

  const [showPatientModal, setPatientModal] = useState(false);
  const [showComplainModal, setComplainModal] = useState(false);
  const [showOEModal, setOEModal] = useState(false);
  const [showDiagnosisModal, setDiagnosisModal] = useState(false);
  const [showInvestigationModal, setInvestigationModal] = useState(false);
  const [showAdviceModal, setAdviceModal] = useState(false);
  const [showMedicineModal, setMedicineModal] = useState(false);

  const [data, setData] = useState([]);

  return (
    <>
      <div style={{ backgroundColor: '#F0FFFF' }} className='col-12 card'> 

      <div className="row">
        <DoctorDetailsComp />
      </div>

      <button className='btn btn-default' onClick={() => setPatientModal(true)}>New Patient +</button> <br/>

     <PatientComp />

      <div className="row mt-5">
          <div className='col-4 border-right'> 
              <span>Chief Complain <button onClick={() => setComplainModal(true)} className='btn btn-sm'> + </button> </span>
              <p id="ccID"></p>

              <p className='mt-5'>On Examination <button onClick={() => setOEModal(true)} className='btn btn-sm'> + </button></p>
              <p id="oeID"></p>


              <p className='mt-5'>Diagnosis <button onClick={() => setDiagnosisModal(true)} className='btn btn-sm'> + </button></p>
              <p id="diagnosisID"></p>


              <p className='mt-5'>Investigation <button onClick={() => setInvestigationModal(true)} className='btn btn-sm'> + </button></p>
              <InvestigationComp />


              <p className='mt-5'>Next Follow Up </p>
              <input type='text' className="form-control mb-2" placeholder="Next Visiting Remark" name="follow-up" />
          </div>

          <div className='col-8'>
            <p style={{ fontSize: "26px" }}>Rx <button onClick={() => setMedicineModal(true)} className='btn btn-sm'> + </button> </p>
            <Medicinecomp />
                

            <span style={{ fontSize: "18px" }} className='mt-5'>Advice <button onClick={() => setAdviceModal(true)} className='btn btn-sm'> + </button></span>
            <AdviceComp />
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
