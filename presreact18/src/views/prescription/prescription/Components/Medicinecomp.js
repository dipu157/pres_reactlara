import React, { useState } from 'react'
import AppURL from 'api/AppURL';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios'

export default function Medicinecomp() {

    const [medicines, setMedicines] = useState([]);
    const [text, setText] = useState('');
  
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
      setText(key);
      console.log('medicine',medicines);
      setMedicines([]);
    }


  return (
    <>
        <div className='row mb-2'>
            <InputGroup>
              <Form.Control onChange={e => searchMedicine(e.target.value) } value={text} placeholder='Medicine Name' />
              <Form.Control name="dose" placeholder='Dose' />
              <Form.Control name="duration" placeholder='Duration' />
              <Form.Control name="m_advice" placeholder='Instruction' />
              <Button className='btn btn-sm btn-default'>ADD</Button>
            </InputGroup>
            
            </div>
            {medicines && medicines.map((med, i) =>
              <div className='autoComp-background' key={i} onClick={() => selectMedicine(med.name)}>{med.medicinetype.short_name+med.name+"("+med.strength.name+")"}</div>
            )}
    </>
  )
}
