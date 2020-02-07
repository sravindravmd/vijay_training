import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", agree: false };
  }

  _onSubmit = e => {
    e.preventDefault();
    console.log("submit ", this.state);
    const { username, password } = this.state;
    axios({
      method: "post",
      url: "http://localhost:4000/login",
      data: {
        username,
        password
      }
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
            console.log(error);
        });
  };

  _onChangeInput = e => {
    e.preventDefault();
    const { id, value } = e.target;
    this.setState({ ...this.state, [id]: value });
  };

  render() {
    const { username, password, agree } = this.state;
    console.log("render", this.state);
    return (
      <div>
        <form>
          <div>
            <label htmlFor="username">Name</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter username"
              value={username}
              onChange={this._onChangeInput}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={this._onChangeInput}
            />
          </div>
          <input
            type="checkbox"
            value={agree}
            id="agree"
            onChange={this._onChangeInput}
          />
          <button type="submit" onClick={this._onSubmit}>
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
