import React, { useState } from 'react'
import AppURL from 'api/AppURL';
import axios from 'axios'

export default function PatientComp() {

    const [patients, setPatients] = useState([]);
    const [text, setText] = useState('');

    async function searchPatient(key)
    {
      let matches = []
      matches = await axios.get(AppURL.PatientSearch(key));
      matches = matches.data.result ;
      console.log('matches',matches);
      setPatients(matches)
      setText(key)
    }
  
    const selectPatient = (key) => {
      setText(key);
      console.log('patients',patients);
      setPatients([]);
    }


  return (
    <>
         <div className="row mt-3">
          <input type="hidden" className="form-control col-1 pid" />
          
          <div className=' col-4'>  Patient Name : 
            <input type="text" className="form-control pname" placeholder='search by name,code,phone..' 
            onChange={e => searchPatient(e.target.value) } value={text} />

            {patients && patients.map((patient, i) =>
            <div key={i} onClick={() => selectPatient(patient.full_name)}>{patient.full_name+'('+patient.phone+')'}</div>
            )} 
          </div>
          
          <div className=' col-2'>  Age : <input type="text" name="age" className="form-control page" />   </div> 
          <div className=' col-2'>  Gender : <input type="text" name="gender" className="form-control pgender" />  </div> 
          <div className=' col-3'>  Phone No : <input type="text" name="phone" className="form-control pphone" /> </div>
      </div>
    </>
  )
}
