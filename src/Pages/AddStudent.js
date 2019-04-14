import React, { Component } from 'react';
import axios from 'axios';

import './addStudent.css'

class AddStudent extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            roll: '',
            dob: '',
            section: '',
            branch: '',
            year: '',
            phone: '',

            showSuccess: false,
        };

        this.handleInput = this.handleInput.bind(this);
        this.addStudent = this.addStudent.bind(this);
        this.resetStudent = this.resetStudent.bind(this);
    }

    componentDidMount() {

    }

    handleInput(e) {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    addStudent(){
        if(this.state.name === '' || this.state.roll === '' || this.state.dob === '' || this.state.section === '' || this.state.branch === '' || this.state.year === '' || this.state.phone === ''){
            alert("PLease fill all the details to add a new student.");
            return;
        }
        axios({
            method: 'patch',
            url: 'https://attendance-94425.firebaseio.com/attendance/database/students.json',
            data: {
                [this.state.roll]: {
                    name: this.state.name,
                    roll: this.state.roll,
                    dob: this.state.dob,
                    section: this.state.section,
                    branch: this.state.branch,
                    year: this.state.year,
                    phone: this.state.phone,
                }
            },
        })
            .then((response) => {
                if (response.status === 200) {
                    console.log("Update Success");

                    setTimeout(() => {
                        this.setState({
                            name: '',
                            roll: '',
                            dob: '',
                            section: '',
                            branch: '',
                            year: '',
                            phone: '',
                            showSuccess: false
                        });
                    }, 3000);
                    this.setState({
                        showSuccess: true
                    });
                }
            })
            .catch((response) => {
                alert(response);
            });
    }

    resetStudent(){
        this.setState({
            name: '',
            roll: '',
            dob: '',
            section: '',
            branch: '',
            year: '',
            phone: '',
        });
    }

    render() {
        return (<div className="addStudent">
            <section className="container">
            {
                this.state.showSuccess !== true ? null : (<div class="notification is-success">
                <button class="delete"></button>
                Student Successfully added.
              </div>)
            }
                <div class="field">
                    <label class="label">Student Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Enter Student's Full name" id="name" value={this.state.name} onChange={this.handleInput} />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Roll Number</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Enter Student's Roll Number" id="roll" value={this.state.roll} onChange={this.handleInput} />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Date of Birth</label>
                    <div class="control">
                        <input type="date" id="dob"  value={this.state.dob} onChange={this.handleInput}></input>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Branch</label>
                    <div class="control">
                        <div class="select">
                            <select id="branch" onChange={this.handleInput}  value={this.state.branch}>
                                <option value="" selected>Select Student's Branch</option>
                                <option value="cse">CSE</option>
                                <option value="ec">EC</option>
                                <option value="ee">EE</option>
                                <option value="mech">Mech</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Section</label>
                    <div class="control">
                        <div class="select">
                            <select id="section" onChange={this.handleInput}  value={this.state.section}>
                                <option value="" selected>Select Student's Section</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Year</label>
                    <div class="control">
                        <div class="select">
                            <select id="year" onChange={this.handleInput}  value={this.state.year}>
                                <option value="" selected>Select Year</option>
                                <option value="A">1st Year</option>
                                <option value="B">2nd Year</option>
                                <option value="C">3rd Year</option>
                                <option value="D">4th Year</option>
                            </select>
                        </div>
                    </div>
                </div>


                <div class="field">
                    <label class="label">Phone Number</label>
                    <div class="control">
                        <input  value={this.state.phone} class="input" type="text" placeholder="Enter Student's Phone Number" id="phone" onChange={this.handleInput}></input>
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link" onClick={this.addStudent}>Submit</button>
                    </div>
                    <div class="control">
                        <button class="button is-text" onClick={this.resetStudent}>reset</button>
                    </div>
                </div>
            </section>
        </div>)
    }
}

export default AddStudent;