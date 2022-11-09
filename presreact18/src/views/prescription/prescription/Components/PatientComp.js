import React, { useState } from 'react'
import AppURL from 'api/AppURL';
import axios from 'axios'
import CurrentDate from 'components/utils/CurrentDate';


export default function PatientComp({pid,setPid}) {

    const [patients, setPatients] = useState([]);
    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    async function searchPatient(key)
    {
      let matches = []
      matches = await axios.get(AppURL.PatientSearch(key));
      matches = matches.data.result ;
      console.log('matches',matches);
      setPatients(matches)
      setText(key)
    }
  
    const selectPatient = (a) => {
      setPid(a.id);
      setName(a.full_name);
      setPhone(a.phone);

      let gen = a.gender;
      if(gen == 'm')
      {
        setGender("Male");
      }else{
        setGender("Female");
      }
      const dob = new Date(a.dob);
      const today = CurrentDate();
      const diffInMs   = new Date(today) - new Date(dob)
      const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24 * 365));
      const page = diffInDays + " Y" ;
      setAge(page);
      setPatients([]);
    }


  return (
    <>
         <div className="row mt-3">
          <input type="hidden" value={pid} name="id" className="form-control col-1 pid" />
          
          <div className=' col-4'>  Patient Name : 
            <input type="text" className="form-control" placeholder='search by name,code,phone..' 
            onChange={e => searchPatient(e.target.value) } value={name} />

            {patients && patients.map((patient, i) =>
            <div className='autoComp-background' key={i} onClick={() => selectPatient(patient)}>{patient.full_name+'('+patient.phone+')'}</div>
            )} 
          </div>
          
          <div className=' col-2'>  Age : <input type="text" value={age} className="form-control" /> </div> 
          <div className=' col-2'>  Gender : <input type="text" value={gender} className="form-control" />  </div> 
          <div className=' col-3'>  Phone No : <input type="text" value={phone} className="form-control" /> </div>
      </div>
    </>
  )
}
