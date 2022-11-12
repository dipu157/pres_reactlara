import React, { useState } from 'react'
import AppURL from 'api/AppURL';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios'

export default function Medicinecomp({medid,setMedid,allmedids,setAllMedids}) {

    const [medicines, setMedicines] = useState([]);
    const [dose, setDose] = useState([]);
    const [duration, setDuration] = useState([]);
    const [madvice, setMadvice] = useState([]);
    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const [strength, setStrength] = useState('');
    const [mtype, setMType] = useState('');
  
    async function searchMedicine(key)
    {
      let matches = []
      matches = await axios.get(AppURL.MedicineSearch(key));
      matches = matches.data.result ;
      console.log('matches',matches);
      setMedicines(matches)
      setText(key)
    }
  
    const selectMedicine = (key) => {
      setMedid(key.id);
      setName(key.name);
      setMType(key.medicinetype.short_name);
      setStrength(key.strength.name);
      console.log('medicine',medicines);
      setMedicines([]);
    }


  return (
    <>
        <div className='row mb-2'>
            <InputGroup>
              <Form.Control value={medid} type="hidden" />
              <Form.Control onChange={e => searchMedicine(e.target.value) } value={mtype+name+strength} placeholder='Medicine Name' />
              <Form.Control onChange={(e) => setDose(e.target.value)} value={dose} placeholder='Dose' />
              <Form.Control onChange={e => setDuration(e.target.value)} value={duration} placeholder='Duration' />
              <Form.Control onChange={e => setMadvice(e.target.value)} value={madvice} placeholder='Instruction' />
              <Button onClick={() => { 
                                      setName(''); 
                                      setMType(''); 
                                      setStrength(''); 
                                      setDose(''); 
                                      setDuration(''); 
                                      setMadvice(''); 

                                      setAllMedids(oldmed => [...oldmed,{
                                        id: medid,
                                        name: name, 
                                        mtype:mtype, 
                                        strength:strength,
                                        dose: dose,
                                        duration: duration,
                                        madvice:madvice
                                      }]);
                                      }} 
              className='btn btn-sm btn-default'>ADD</Button>
            </InputGroup>
            
            </div>
            {medicines && medicines.map((med, i) =>
              <div className='autoComp-background' key={i} onClick={() => selectMedicine(med)}>{med.medicinetype.short_name+med.name+"("+med.strength.name+")"}</div>
            )}

            <ul>
              {allmedids.map(iinv => (
                <li key={iinv.id}>{iinv.mtype+iinv.name+iinv.strength+iinv.dose+iinv.duration+iinv.madvice}</li>
              ))}
            </ul>
    </>
  )
}
