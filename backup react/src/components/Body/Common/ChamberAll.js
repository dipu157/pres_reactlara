import AppURL from 'api/AppURL';
import axios from 'axios';
import React, { Component } from 'react'
import { Row } from 'react-bootstrap';

export default class ChamberAll extends Component {

    constructor()
    {
        super();
        this.state={
        chamberLists: []
        }
    }

  componentDidMount()
  {
    axios.get(AppURL.ChamberList).then(response => {
        this.setState({ chamberLists: response.data});
    }).catch(error => {

    });
  }


  render() {

     const MyList = this.state.chamberLists;

    return (
      <>
        <thead>
            <tr>
                <th className="border-0">Name</th>
                <th className="border-0">Address</th>
                <th className="border-0">Phone</th>
                <th className="border-0">City</th>
            </tr>
        </thead>   
        
        {
            MyList.map((item,i) =>
                <tbody  key={i}>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.phone}</td>
                        <td>{item.city}</td>
                    </tr>
                </tbody>
            )
        }
      
      </>
    )
  }
}
