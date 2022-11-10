import React, { useState } from 'react'
import AppURL from 'api/AppURL';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios'

let nextId = 0;
export default function InvestigationComp({invid,setInvid,allinvids,setAllInvid}) {

    const [investigations, setInvestigations] = useState([]);
    // const [investiga, setInvestiga] = useState([]);
    const [text, setText] = useState('');
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
      setInvid(key.id);
      setName(key.test_name);
      
      setInvestigations([]);
    }


  return (
    <>
        <InputGroup className="mb-3">
            <Form.Control type="hidden" value={invid} />
            <Form.Control onChange={e => searchInvestigation(e.target.value) } value={name} placeholder='Investigation' />
            <Button onClick={() => { setName(''); allinvids.push({id: invid,name: name,});}} 
            className='btn btn-sm btn-default'>ADD</Button>
        </InputGroup>
        {investigations && investigations.map((inv, i) =>
            <div className='autoComp-background' key={i} onClick={() => selectInvestigation(inv)}>{inv.test_name}</div>
        )}


        <ul>
        {allinvids.map(iinv => (
          <li key={iinv.id}>{iinv.name}</li>
        ))}
      </ul>
    </>
  )
}
