

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import Table from './Table';
import Navbar from './Common/Navbar';
import AddStudent from './Pages/AddStudent';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {

    const Home = () => (<div className="App">
      <header className="App-header">
      </header>

      <div className="main">
        <div className="card">
            <h4>Design & Implementation of Attendance System with QR Codes using Data Analytics</h4>
            <div className="faculties">
              <div className="faculty">
                <div className="position">Project Guide:</div>
                <div className="name">Mr. Deepak Agrawal</div>
              </div>
              <div className="faculty">
                <div className="position">Project Coordinator:</div>
                <div className="name">Miss Kavita Namdev</div>
              </div>
            </div>

            <div className="students">
              <span className="by">Made by: </span><span>Urvashi Murari (0827cs151236), Tanisha Chouhan(0827cs151230) & Tanishq Gupta(0827cs151231)</span>
            </div>
        </div>
      </div>
    </div>);

    return (<Router>
      <div>
        <Navbar />
        
        <Route exact path="/" component={Home} />
        <Route path="/attendance" component={Table} />
        <Route path="/addStudent" component={AddStudent} />
      </div>
    </Router>);
  }
}

export default App;
