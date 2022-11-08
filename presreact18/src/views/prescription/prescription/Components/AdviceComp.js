import React, { useState } from 'react'
import AppURL from 'api/AppURL';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios'

export default function AdviceComp() {

    const [advices, setAdvices] = useState([]);
    const [text, setText] = useState('');

    async function searchAdvice(key)
    {
      let matches = []
      matches = await axios.get(AppURL.AdviceSearch(key));
      matches = matches.data.result ;
      console.log('matches',matches);
      setAdvices(matches)
      setText(key)
    }
  
    const selectAdvice = (key) => {
      setText(key);
      console.log('advice',advices);
      setAdvices([]);
    }
   
      

  return (
    <>
        <InputGroup className="mb-3 mt-3">
              <Form.Control onChange={e => searchAdvice(e.target.value) } value={text} placeholder='Advice' />
              <Button className='btn btn-sm btn-default'>ADD</Button>
            </InputGroup>
            {advices && advices.map((inv, i) =>
              <div key={i} onClick={() => selectAdvice(inv.general_advice)}>{inv.general_advice}</div>
              )}
    </>
  )
}
