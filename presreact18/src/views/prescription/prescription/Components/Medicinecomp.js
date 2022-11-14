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
      setName(key)
    }
  
    const selectMedicine = (key) => {
      setMedid(key.id);
      setName(key.name);
      setMType(key.medicinetype.short_name);
      setStrength(key.strength.name);
      console.log('medicine',medicines);
      setMedicines([]);
    }

    const cancelMedicine = (key) => {
      setAllMedids((current) =>
      current.filter((iinv) => iinv.id !== key.id)
    );
    }


  return (
    <>
        <div className='row'>
            <InputGroup className='m-2'>
              <Form.Control value={medid} type="hidden" />
              <Form.Control style={{ width:"120px" }} onChange={e => searchMedicine(e.target.value) } value={mtype+name+strength} placeholder='Medicine Name' />
              <Form.Control style={{ width:"40px" }} onChange={(e) => setDose(e.target.value)} value={dose} placeholder='Dose' />
              <Form.Control style={{ width:"40px" }} onChange={e => setDuration(e.target.value)} value={duration} placeholder='Duration' />
              <Form.Control style={{ width:"70px" }} onChange={e => setMadvice(e.target.value)} value={madvice} placeholder='Instruction' />
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

            <table className='table table-striped'>
              {allmedids.map(iinv => (
                <tr key={iinv.id}>
                  <td>{iinv.mtype +" "+ iinv.name+" "+"("+ iinv.strength+")"}</td>
                  <td>{iinv.dose}</td>
                  <td>{iinv.duration}</td>
                  <td>{iinv.madvice}</td>
                  <td onClick={() => cancelMedicine(iinv)} className='btn btn-sm btn-danger mt-2 p-2'>Cancel</td>
                </tr>
              ))}
            </table>
    </>
  )
}
