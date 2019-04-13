

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import Table from './Table';
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
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/attendance">Attendance</Link></li>
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/attendance" component={Table} />
      </div>
    </Router>);
  }
}

export default App;
