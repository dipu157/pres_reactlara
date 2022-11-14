import React, { useState } from 'react'
import AppURL from 'api/AppURL';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios'

export default function AdviceComp({advid,setAdvid,alladvids,setAllAdvid}) {

    const [advices, setAdvices] = useState([]);
    const [advice, setAdvice] = useState('');

    async function searchAdvice(key)
    {
      let matches = []
      matches = await axios.get(AppURL.AdviceSearch(key));
      matches = matches.data.result ;
      console.log('matches',matches);
      setAdvices(matches)
      setAdvice(key)
    }
  
    const selectAdvice = (key) => {
      setAdvid(key.id);
      setAdvice(key.general_advice);
      setAdvices([]);
    }

    const cancelAdvice = (key) => {
      setAllAdvid((current) =>
      current.filter((iinv) => iinv.id !== key.id)
    );
    }
   
      

  return (
    <>
        <InputGroup className="mt-3">
              <Form.Control type='hidden' value={advid} placeholder='Advice' />
              <Form.Control onChange={e => searchAdvice(e.target.value) } value={advice} placeholder='Advice' />
              <Button onClick={() => { 
                                  setAdvice(''); 
                                  setAllAdvid(oldadv => [...oldadv,{
                                    id: advid,
                                    name: advice
                                  }]);
                                  }}
                                  className='btn btn-sm btn-default'>ADD</Button>
            </InputGroup>
            
            {advices && advices.map((inv, i) =>
              <div className='autoComp-background' key={i} onClick={() => selectAdvice(inv)}>{inv.general_advice}</div>
            )}

      <table className='table table-striped'>
        {alladvids.map(iinv => (
          <tr key={iinv.id}>
            <td>{iinv.name}</td>
            <td onClick={() => cancelAdvice(iinv)} className='btn btn-sm btn-danger mt-2 p-2'>Cancel</td>
          </tr>
        ))}
      </table>
    </>
  )
}
