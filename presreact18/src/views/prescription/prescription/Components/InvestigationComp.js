import React, { useState } from 'react'
import AppURL from 'api/AppURL';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios'

let nextId = 0;
export default function InvestigationComp({invid,setInvid,allinvids,setAllInvid}) {

    const [investigations, setInvestigations] = useState([]);
    const [name, setName] = useState('');

    async function searchInvestigation(key)
    {
      let matches = []
      matches = await axios.get(AppURL.InvestigationSearch(key));
      matches = matches.data.result ;
      console.log('matches',matches);
      setInvestigations(matches)
      setName(key)
    }
  
    const selectInvestigation = (key) => {
      setInvid(key.id);
      setName(key.test_name);
      
      setInvestigations([]);
    }

    const cancelInvestigation = (key) => {
      setAllInvid((current) =>
      current.filter((iinv) => iinv.id !== key.id)
    );
    }


  return (
    <>
        <InputGroup className="mb-3">
            <Form.Control type="hidden" value={invid} />
            <Form.Control onChange={e => searchInvestigation(e.target.value) } value={name} placeholder='Investigation' />
            <Button onClick={() => { 
                                    setName(''); 
                                    setAllInvid(oldinv => [...oldinv,{
                                      id: invid,
                                      name: name
                                    }]);
                                    }} 
                                  className='btn btn-sm btn-default'>ADD</Button>
        </InputGroup>
        {investigations && investigations.map((inv, i) =>
            <div className='autoComp-background' key={i} onClick={() => selectInvestigation(inv)}>{inv.test_name}</div>
        )}


        <table className='table table-striped'>
          <tbody>
          {allinvids.map(iinv => (
            <tr key={iinv.id}>
              <td>{iinv.name}</td>
              <td onClick={() => cancelInvestigation(iinv)} className='btn btn-sm btn-danger mt-2 p-2'>Cancel</td>
            </tr>
          ))}
          </tbody>
        </table>
    </>
  )
}
