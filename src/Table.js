/*global $*/
/*global jQuery*/
import React, { Component } from 'react';
import axios from 'axios';

import './table.css'
class Table extends Component {

    constructor(){
        super();
        this.state = {
            list: null,
            attendanceType: '00',
        }        
        
        this.handleInput = this.handleInput.bind(this);
        this.getAttendance = this.getAttendance.bind(this);
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

            this.initializer = setInterval(()=>{
                this.initializeDataTable();
            },1000)
    }

    initializeDataTable(){
        console.log("Called");
        if( this.state.list !== null && typeof jQuery !== 'undefined' && jQuery().dataTable !== undefined ){
            $('#example').DataTable();
            clearInterval(this.initializer);
        }
    }

    handleInput(e) {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    getAttendance(timestamps){
        if (timestamps === "" || timestamps === undefined) return 0;

        if( this.state.attendanceType === '00' ) {
            return Object.keys(timestamps).length;
        }
        else {
            let attendance = 0;
            Object.keys(timestamps).map((key, index) => {
                if(key.split('-')[1] === this.state.attendanceType){
                    ++attendance;
                }
              });
              return attendance;
        }

    }

    render() {
        return (<div>
            {
                this.state.list === null ? null : (<div className="container" style={{ maxWidth: '70rem', margin: '4rem auto 10rem auto' }}>
                
                <div className="field">
                    <label className="label">Select Attendance Type:</label>
                    <div className="control">
                        <div className="select">
                            <select id="attendanceType" onChange={this.handleInput}  value={this.state.attendanceType}>
                                        <option value="00">Total</option>
                                        <option value="01">January</option>
                                        <option value="02">Februrary</option>
                                        <option value="03">March</option>
                                        <option value="04">April</option>
                                        <option value="05">May</option>
                                        <option value="06">June</option>
                                        <option value="07">July</option>
                                        <option value="08">August</option>
                                        <option value="09">Sepetember</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                            </select> 
                        </div>
                    </div>
                </div>
                
                <table id="example" className="display">
                        <thead>
                            <tr>
                                <th>Roll Number</th>
                                <th>Name</th>
                                <th>Date of Birth</th>
                                <th>Branch</th>
                                <th>Year</th>
                                <th>Section</th>
                                <th>Attendance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.list === null ? null : Object.keys(this.state.list).map((key, index) => {
                                    return (<tr key={index}> 
                                        <td>{ this.state.list[key].roll }</td>
                                        <td>{ this.state.list[key].name }</td>
                                        <td>{ this.state.list[key].dob }</td>
                                        <td>{ this.state.list[key].branch }</td>
                                        <td>{ this.state.list[key].year }</td>
                                        <td>{ this.state.list[key].section }</td>
                                        <td>{ this.getAttendance(this.state.list[key].timestamps) }</td>
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