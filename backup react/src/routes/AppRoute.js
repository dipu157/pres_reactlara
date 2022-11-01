import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import axios from 'axios' 
import AppURL from '../api/AppURL'

export default class AppRoute extends Component {

    constructor() {
        super();
        this.state = {
          user: {}
        }
      }
    
      componentDidMount() {
        axios.get(AppURL.UserData).then((response) => {
          this.setUser(response.data)
        }).catch(error => {
    
        });
      }
    
      setUser = (user) => {
        this.setState({ user: user })
      }

      
  render() {
    return (
      <div>AppRoute</div>
    )
  }
}
