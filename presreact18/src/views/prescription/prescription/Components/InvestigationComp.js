import React, { useState } from 'react'
import AppURL from 'api/AppURL';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios'


export default function InvestigationComp() {

    const [investigations, setInvestigations] = useState([]);
    const [text, setText] = useState('');
    const [invId, setInvId] = useState('');
    const [name, setName] = useState('');

    async function searchInvestigation(key)
    {
      let matches = []
      matches = await axios.get(AppURL.InvestigationSearch(key));
      matches = matches.data.result ;
      console.log('matches',matches);
      setInvestigations(matches)
      setText(key)
    }
  
    const selectInvestigation = (key) => {
      setInvId(key.id);
      setName(key.test_name);
      
      setInvestigations([]);
    }


  return (
    <>
        <InputGroup className="mb-3">
            <Form.Control type="hidden" name="investigation_id" value={invId} />
            <Form.Control onChange={e => searchInvestigation(e.target.value) } value={name} placeholder='Investigation' />
            <Button className='btn btn-sm btn-default'>ADD</Button>
        </InputGroup>
        {investigations && investigations.map((inv, i) =>
            <div className='autoComp-background' key={i} onClick={() => selectInvestigation(inv)}>{inv.test_name}</div>
            )}
            <p id="investigationID"></p>
    </>
  )
}
