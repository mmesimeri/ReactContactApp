import React, { Component } from 'react';
import axios from 'axios';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      email: '',
      address: '',
      phone: '',
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    })
  }

  onChangePhone(e) {
    this.setState({
        phone: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      email: this.state.email,
      address: this.state.address,
      phone: this.state.phone
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Contact</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Name: </label>
          <input  type="text"
              required
              className="form-control"
              placeholder="e.g Maria Mesimeri"
              onChange={this.onChangeUsername}
              />
              </div>
        <div className="form-group"> 
          <label>Email: </label>
          <input  type="email"
              required
              className="form-control"
              placeholder="e.g mesimeri@gmail.com"
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
        </div>
        <div className="form-group">
          <label>Address: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.address}
              onChange={this.onChangeAddress}
              />
        </div>
        <div className="form-group">
          <label>Phone: </label>
          <div>
          <PhoneInput
          country={'gr'}
          value={this.state.phone}
          onChange={phone=>this.setState({phone})}
        />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Contact" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}