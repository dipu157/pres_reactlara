import React, { useState } from 'react'
import AppURL from 'api/AppURL';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios'

export default function AdviceComp({advid,setAdvid}) {

    const [advices, setAdvices] = useState([]);
    const [text, setText] = useState('');
    const [advice, setAdvice] = useState('');

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
      setAdvid(key.id);
      setAdvice(key.general_advice);
      setAdvices([]);
    }
   
      

  return (
    <>
        <InputGroup className="mt-5">
              <Form.Control value={advid} placeholder='Advice' />
              <Form.Control onChange={e => searchAdvice(e.target.value) } value={advice} placeholder='Advice' />
              <Button className='btn btn-sm btn-default'>ADD</Button>
            </InputGroup>
            {advices && advices.map((inv, i) =>
              <div className='autoComp-background' key={i} onClick={() => selectAdvice(inv)}>{inv.general_advice}</div>
              )}
    </>
  )
}
