import React, { Component } from 'react'
import axios from 'axios';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, NavLink, Redirect } from 'react-router-dom'
import AppURL from '../../api/AppURL';
import login from '../../assets/img/login.png'
import { useState } from 'react';

export default function Login({user,setUser}) {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [message,setMessage] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);

  async function formSubmit(e)
  {
    e.preventDefault();

    const data = { email,password }
    const result = await axios.post(AppURL.UserLogin, data, 
      { headers: { 'Content-Type': 'application/json' }}
    ).then(response => {
      localStorage.setItem('token', response.data.token);
      setLoggedIn(true);
      setUser(response.data.user);
    }).catch(error => {
    });
  }

  if (loggedIn) {
    return <Redirect to={'/admin/dashboard'} />
  }

  if (localStorage.getItem('token')) {
    return <Redirect to="/admin/dashboard" />
  }


  return (
    <div>
      <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" lg={12} md={12} sm={12} xs={12}>

              <Row className='text-center'>
                <Col className='d-flex justify-content-center' lg={6} md={6} sm={12} xs={12}>

                  <Form className="onboardForm">
                    <h4 className="section-title-login"> SING IN TO THE PRESCRIPTION</h4>
                    <input className='form-control m-2' type="email"
                      onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email"  />
                    <input className='form-control m-2' type="password"
                     onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    <Button type='submit' onClick={formSubmit} className="btn btn-block m-2 site-btn-login">Login</Button>
                    <br /><br />
                    <hr />
                    <p>Forget Password ? </p>
                  </Form>

                </Col>

                <Col className='p-0 Desktop m-0' lg={6} md={6} sm={6} xs={6}>
                  <img className='onboardBanner' src={login} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
    </div>
  )
}
