

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

      <Table />
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
