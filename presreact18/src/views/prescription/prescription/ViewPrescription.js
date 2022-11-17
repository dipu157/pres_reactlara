import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router'
import DoctorDetailsComp from './Components/DoctorDetailsComp';
import axios from "axios";
import AppURL from "api/AppURL";


export default function ViewPrescription() {

    const params = useParams();
    const [prescriptions, setPrescriptions] = useState([]);

    useEffect(() => {
      axios
        .get(AppURL.PrescriptionId(params.id))
        .then((response) => {
          setPrescriptions(response.data);
        })
        .catch((error) => {});
    }, []);

    function printDiv(divName) {
      var printContents = document.getElementById(divName).innerHTML;
      var originalContents = document.body.innerHTML;
 
      document.body.innerHTML = printContents;
 
      window.print();
 
      document.body.innerHTML = originalContents;
 }


  return (
    <>

      <div id="printableArea" className='container border-bottom'>
      <div className="row">
        <DoctorDetailsComp />
      </div>

      <div className="row mt-2">
          <div className=' col-4'> <b>Patient Name :</b>  {prescriptions.patient?.full_name}</div>
          <div className=' col-2'>  <b>Age :</b>  {prescriptions.patient?.dob}</div> 
          <div className=' col-2'>  <b>Gender :</b>  {prescriptions.patient?.gender}</div> 
          <div className=' col-3'>  <b>Phone No :</b> {prescriptions.patient?.phone}</div>
      </div>

      <div className="row mt-5">
          <div className='col-4 border-right'>
            <span className='view_pres_title'>Chief Complain :</span> <br />
            {prescriptions.complain}

            <p className='mt-5 view_pres_title'>On Examination</p>
            <div>
              {prescriptions.bp && <p>BP : {prescriptions.bp} </p>}
              {prescriptions.pulse && <p>Pulse : {prescriptions.pulse} </p>}
              {prescriptions.temp && <p>Temp : {prescriptions.temp} </p>}
              {prescriptions.weight && <p>Weight : {prescriptions.weight} </p>}
              {prescriptions.spo2 && <p>Spo2 : {prescriptions.spo2} </p>}
              {prescriptions.sugar && <p>Sugar : {prescriptions.sugar} </p>}
              {prescriptions.past_history && <p>Past History : {prescriptions.past_history} </p>}
              {prescriptions.drug_history && <p>Drug History : {prescriptions.drug_history} </p>}
            </div>


            <p className='mt-5 view_pres_title'>Diagnosis</p>
            {prescriptions.diagnosis}



            <p className='mt-5 view_pres_title'>Investigation</p>
            <div className='row'>
            {prescriptions.pinvestigations?.map((inv, i) => 
                inv.investigation.test_name
            ).join(", ")}
            </div>


            <p className='mt-5 view_pres_title'>Next Follow Up </p>
            {prescriptions.follow_up}
          </div>

          <div className='col-8'>
            <div className='container medicine-div'>
            <p style={{ fontSize: "26px" }}>Rx </p>
            <div className='row'>
              <table className='table table-striped'>
                <tbody>
                {prescriptions.pmedicines?.map(med => (
                  <tr key={med.id}>
                  <td>{med.medicine.medicinetype.short_name +" "+ med.medicine.name+" "+"("+ med.medicine.strength.name +")"}</td>
                  <td>{med.dose}</td>
                  <td>{med.duration}</td>
                  <td>{med.madvice}</td>
                </tr>
                ))}
                </tbody>
              </table>
            </div>
            </div>
            

            <div className='container advice-div'>
            <span className='view_pres_title'>Advice </span>
            <div className='row'>
              <table className='table table-striped'>
                <tbody>
                {prescriptions.padvices?.map(iinv => (
                  <tr key={iinv.id}>
                    <td>{iinv.advice.general_advice}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
            </div>
            
          </div>

      </div>
      </div>
        

        {/* <Button onClick={() => {window.print()}} >Print </Button> */}
        <Button  onClick={() => printDiv('printableArea')} className='btn btn-block mb-3'>Print</Button>

        {/* {JSON.stringify(params,null,2)} */}
        {/* <pre>{JSON.stringify(prescriptions,null,2)}</pre> */}
    </>
  )
}
