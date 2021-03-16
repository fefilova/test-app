import './App.scss'
import './SignIn/SignIn'
import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { createBrowserHistory } from "history"

const history = createBrowserHistory()

export default function App() {
  return (
    <BrowserRouter history={history}>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route path="/signin" component={SignIn} />
      </div>
    </BrowserRouter>
  )
}

function Home() {
  return (
    <div className="Home">
        <Link to="/register" className="button">Зарегистрироваться</Link>
        <Link to="/signin" className="button">Войти</Link>
    </div>
  )
}

function Register() {
  return (
    <div className="Register">
      <input type="text" className="input"></input>
      <Link to="/register" className="button">Зарегистрироваться</Link>
    </div>
  )
}

function SignIn() {
  return (
    <div className="SignIn">
      <input type="text" className="input"></input>
      <input type="text" className="input"></input>
      <Link to="/signin" className="button">Войти</Link>
    </div>
  )
}