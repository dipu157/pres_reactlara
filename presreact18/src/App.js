import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AppURL from 'api/AppURL';
import AdminLayout from "layouts/Admin.js";
import Login from "views/auth/Login";
import axios from 'axios';
import { useEffect , useState } from 'react';
import ViewPrescription from 'views/prescription/prescription/ViewPrescription';

export default function App() {

  const [user,setUser] = useState([]);

  useEffect(() => {
    axios.get(AppURL.UserData).then(response => {
      setUser(response.data);
    }).catch(error => {

    });
  }, [])


  return (
    <>
        <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => <Login user={user} setUser={setUser} />} />
          <Route exact path="/login" render={(props) => <Login user={user} setUser={setUser} />} />
          <Route path="/admin" render={(props) => <AdminLayout user={user} setUser={setUser} {...props} />} />
          <Route path="/viewpres/:id" render={(props) => <ViewPrescription user={user} setUser={setUser} {...props} />} />
        </Switch>
        </BrowserRouter>
      </>
  )
}
