import React from 'react'
import { useState } from 'react';
import { Button, Card, Table } from 'react-bootstrap'
import PatientModal from 'views/common/Modal/PatientModal';
import AdviceModal from '../Modal/AdviceModal';
import InvestigationModal from '../Modal/InvestigationModal';
import PatientComp from './Components/PatientComp';
import InvestigationComp from './Components/InvestigationComp';
import AdviceComp from './Components/AdviceComp';
import Medicinecomp from './Components/Medicinecomp';
import DoctorDetailsComp from './Components/DoctorDetailsComp';
import OEModal from './Modal/OEModal';
import CurrentDate from 'components/utils/CurrentDate';
import axios from 'axios'
import AppURL from 'api/AppURL';

export default function NewPrescription() {

  const [showPatientModal, setPatientModal] = useState(false);
  const [showOEModal, setOEModal] = useState(false);
  const [showInvestigationModal, setInvestigationModal] = useState(false);
  const [showAdviceModal, setAdviceModal] = useState(false);
  const [showMedicineModal, setMedicineModal] = useState(false);

  const [data, setData] = useState([]);

  const [pid, setPid] = useState("");

  const [invid, setInvid] = useState([]);
  const [allinvids, setAllInvid] = useState([]);

  const [advid, setAdvid] = useState([]);
  const [alladvids, setAllAdvid] = useState([]);


  const [medid, setMedid] = useState([]);
  const [allmedids, setAllMedids] = useState([]);

  const [did, setDid] = useState("");
  const [date, setDate] = useState("");
  const [followUp, setFollowup] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [cc, setCC] = useState([]);

  const [bp, setBP] = useState("");
  const [pulse, setPulse] = useState("");
  const [temp, setTemp] = useState("");
  const [weight, setWeight] = useState("");
  const [spo2, setSpo] = useState("");
  const [sugar, setSugar] = useState("");
  const [past_history, setPastHist] = useState("");
  const [drug_history, setDrugHist] = useState("");
  const [others1, setOther1] = useState("");
  const [others2, setOther2] = useState("");
  const [others3, setOther3] = useState("");
  const [others4, setOther4] = useState("");
  const [others5, setOther5] = useState("");

  let oeData = {
    show: showOEModal,
    setShow: setOEModal,

    bp: bp,
    pulse: pulse,
    temp: temp,
    weight: weight,
    spo2: spo2,
    sugar: sugar,
    past_history: past_history,
    drug_history: drug_history,
    others1: others1,
    others2: others2,
    others3: others3,
    others4: others4,
    others5: others5,

    setBP: setBP,
    setPulse: setPulse,
    setTemp: setTemp,
    setBP: setBP,
    setWeight: setWeight,
    setSpo: setSpo,
    setSugar: setSugar,
    setPastHist: setPastHist,
    setDrugHist: setDrugHist,
    setOther1: setOther1,
    setOther2: setOther2,
    setOther3: setOther3,
    setOther4: setOther4,
    setOther5: setOther5,
  }

  async function savePrintPrescription(e) {
    e.preventDefault();

    console.warn(pid, bp, pulse, temp, weight, spo2, sugar, past_history, drug_history, followUp, allinvids,
      alladvids, allmedids, cc, diagnosis);

    const data = {
      pid, 
      did: 1,
      bp, 
      pulse, 
      temp, 
      weight, 
      spo2, sugar, past_history, drug_history, followUp, allinvids,
      alladvids, allmedids, cc, diagnosis, user_id :1
    }

    // const formData = new FormData();
    // formData.append('pid',pid);
    // formData.append('did',1);
    // formData.append('bp',bp);
    // formData.append('pulse',pulse);
    // formData.append('temp',temp);
    // formData.append('weight',weight);
    // formData.append('spo2',spo2);
    // formData.append('sugar',sugar);
    // formData.append('past_history',past_history);
    // formData.append('drug_history',drug_history);
    // formData.append('allinvids',allinvids);
    // formData.append('alladvids',alladvids);
    // formData.append('allmedids',allmedids);
    // formData.append('cc',cc);
    // formData.append('diagnosis',diagnosis);
    // formData.append('user_id',1);

    const result = await axios.post(AppURL.PrescriptionAdd, data, 
      { headers: 
        { 'Content-Type': 'application/json' }
    });



  }

  return (
    <>
      <div style={{ backgroundColor: '#F0FFFF' }} className='col-12 card'>

        <div className="row">
          <DoctorDetailsComp />
        </div>

        <button className='btn btn-default' onClick={() => setPatientModal(true)}>New Patient +</button> <br />

        <PatientComp pid={pid} setPid={setPid} />

        <div className="row mt-5">
          <div className='col-4 border-right'>
            <span>Chief Complain </span>
            <textarea onChange={(e) => setCC(e.target.value)} rows="2" cols="4" className="form-control" placeholder='Chief Complains...'></textarea>

            <p className='mt-5'>On Examination <button onClick={() => setOEModal(true)} className='btn btn-sm'> + </button></p>
            <div>
              {bp && <p>BP : {bp} </p>}
              {pulse && <p>Pulse : {pulse} </p>}
              {temp && <p>Temp : {temp} </p>}
              {weight && <p>Weight : {weight} </p>}
              {spo2 && <p>Spo2 : {spo2} </p>}
              {sugar && <p>Sugar : {sugar} </p>}
              {past_history && <p>Past History : {past_history} </p>}
              {drug_history && <p>Drug History : {drug_history} </p>}
            </div>


            <p className='mt-5'>Diagnosis</p>
            <textarea onChange={(e) => setDiagnosis(e.target.value)} rows="2" cols="4" className="form-control" placeholder='Diagnosis..'></textarea>



            <p className='mt-5'>Investigation <button onClick={() => setInvestigationModal(true)} className='btn btn-sm'> + </button></p>
            <InvestigationComp invid={invid} setInvid={setInvid} allinvids={allinvids} setAllInvid={setAllInvid} />


            <p className='mt-5'>Next Follow Up </p>
            <input type='text' onChange={(e) => setFollowup(e.target.value)} className="form-control mb-2" placeholder="Next Visiting Remark" />
          </div>

          <div className='col-8'>
            <p style={{ fontSize: "26px" }}>Rx <button onClick={() => setMedicineModal(true)} className='btn btn-sm'> + </button> </p>
            <Medicinecomp medid={medid} setMedid={setMedid} allmedids={allmedids} setAllMedids={setAllMedids} />


            <span style={{ fontSize: "18px" }} className='mt-5'>Advice <button onClick={() => setAdviceModal(true)} className='btn btn-sm'> + </button></span>
            <AdviceComp advid={advid} setAdvid={setAdvid} alladvids={alladvids} setAllAdvid={setAllAdvid} />
          </div>

          <p id='advice'></p>

        </div>

        <Button onClick={(e) => savePrintPrescription(e)} className='btn btn-block mb-3'>Save & Print</Button>

      </div>

      <PatientModal data={data} show={showPatientModal} setShow={setPatientModal} />
      <InvestigationModal data={data} show={showInvestigationModal} setShow={setInvestigationModal} />
      <AdviceModal data={data} show={showAdviceModal} setShow={setAdviceModal} />
      <OEModal {...oeData} />


      {/* <pre>{JSON.stringify(allmedids,null,2)}</pre> */}
    </>
  )
}
