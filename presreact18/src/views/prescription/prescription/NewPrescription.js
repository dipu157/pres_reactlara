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

  const [pid,setPid] = useState("");

  const [invid,setInvid] = useState([]);
  const [allinvids,setAllInvid] = useState([]);

  const [advid,setAdvid] = useState([]);
  const [alladvids,setAllAdvid] = useState([]);


  const [medid,setMedid] = useState([]);
  const [allmedids,setAllMedids] = useState([]);

  const [did,setDid] = useState("");
  const [date,setDate] = useState("");
  const [followUp,setFollowup] = useState("");
  const [diagnosis,setDiagnosis] = useState("");
  const [cc,setCC] = useState([]);

  function savePrintPrescription(e)
  {
    e.preventDefault();

    console.warn(pid,followUp,allinvids,alladvids,allmedids);

    // const formData = new FormData();
    // formData.append('pid',pid);
    // formData.append('did',1);
    // formData.append('followUp',followUp);


  }

  return (
    <>
      <div style={{ backgroundColor: '#F0FFFF' }} className='col-12 card'> 

      <div className="row">
        <DoctorDetailsComp />
      </div>

      <button className='btn btn-default' onClick={() => setPatientModal(true)}>New Patient +</button> <br/>

     <PatientComp pid={pid} setPid={setPid} />

      <div className="row mt-5">
          <div className='col-4 border-right'> 
              <span>Chief Complain <button onClick={() => setComplainModal(true)} className='btn btn-sm'> + </button> </span>
              <p id="ccID"></p>

              <p className='mt-5'>On Examination <button onClick={() => setOEModal(true)} className='btn btn-sm'> + </button></p>
              <p id="oeID"></p>


              <p className='mt-5'>Diagnosis <button onClick={() => setDiagnosisModal(true)} className='btn btn-sm'> + </button></p>
              <p id="diagnosisID"></p>


              <p className='mt-5'>Investigation <button onClick={() => setInvestigationModal(true)} className='btn btn-sm'> + </button></p>
              <InvestigationComp invid={invid} setInvid={setInvid} allinvids={allinvids} setAllInvid={setAllInvid} />


              <p className='mt-5'>Next Follow Up </p>
              <input type='text'onChange={(e) => setFollowup(e.target.value)} className="form-control mb-2" placeholder="Next Visiting Remark" />
          </div>

          <div className='col-8'>
            <p style={{ fontSize: "26px" }}>Rx <button onClick={() => setMedicineModal(true)} className='btn btn-sm'> + </button> </p>
            <Medicinecomp medid={medid} setMedid={setMedid}  allmedids={allmedids} setAllMedids={setAllMedids} />
                

            <span style={{ fontSize: "18px" }} className='mt-5'>Advice <button onClick={() => setAdviceModal(true)} className='btn btn-sm'> + </button></span>
            <AdviceComp advid={advid} setAdvid={setAdvid} alladvids ={alladvids} setAllAdvid={setAllAdvid} />
          </div>

          <p id='advice'></p>
      
      </div>

      <Button onClick={(e) => savePrintPrescription(e)} className='btn btn-block mb-3'>Save & Print</Button>
      
      </div>

      <PatientModal data={data} show={showPatientModal} setShow={setPatientModal} />
      <ComplainModal show={showComplainModal} setShow={setComplainModal} />
      <DiagnosisModal show={showDiagnosisModal} setShow={setDiagnosisModal} />
      <InvestigationModal data={data} show={showInvestigationModal} setShow={setInvestigationModal} />
      <AdviceModal data={data} show={showAdviceModal} setShow={setAdviceModal} />


      {/* <pre>{JSON.stringify(allmedids,null,2)}</pre> */}
    </>
  )
}
