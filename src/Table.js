/*global $*/
import React, { Component } from 'react';
import axios from 'axios';

import './table.css'
class Table extends Component {

    constructor(){
        super();
        this.state = {
            list: null
        }
    }

    componentDidMount(){
        axios({
            method: 'get',
            url: `https://attendance-94425.firebaseio.com/attendance/database/students.json`
        })
            .then((res1) => {
                    this.setState({
                        list: res1.data,
                    })
            })
    }

    render() {
        return (<div>
            <button onClick={() => {
                $('#example').DataTable();
            }}>
                Convert Table
          </button>

            {
                this.state.list === null ? null : (<div className="container" style={{ maxWidth: '70rem' }}>
                <table id="example" className="display">
                        <thead>
                            <tr>
                                <th>Roll Number</th>
                                <th>Name</th>
                                <th>Date of Birth</th>
                                <th>Branch</th>
                                <th>Year</th>
                                <th>Section</th>
                                <th>Net Attendance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.list === null ? null : Object.keys(this.state.list).map((key, index) => {
                                    return (<tr> 
                                        <td>{ this.state.list[key].roll }</td>
                                        <td>{ this.state.list[key].name }</td>
                                        <td>{ this.state.list[key].dob }</td>
                                        <td>{ this.state.list[key].branch }</td>
                                        <td>{ this.state.list[key].year }</td>
                                        <td>{ this.state.list[key].section }</td>
                                        <td>{ (this.state.list[key].timestamps === "" || this.state.list[key].timestamps === undefined) ? 0 : Object.keys(this.state.list[key].timestamps).length }</td>
                                        </tr>)
                                  })
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Roll Number</th>
                                <th>Name</th>
                                <th>Date of Birth</th>
                                <th>Branch</th>
                                <th>Year</th>
                                <th>Section</th>
                                <th>Net Attendance</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>)
            }
            
        </div>)
    }
}

export default Table;