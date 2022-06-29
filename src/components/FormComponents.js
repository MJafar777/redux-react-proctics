import React, { Component } from "react";
import store from "../redux/store";
class FormComponents extends Component {
  state = {};
  FirstName = (e) => {
    this.setState({ FirstName: e.target.value });
  };
  MiddleName = (e) => {
    this.setState({ MiddleName: e.target.value });
  };
  LastName = (e) => {
    this.setState({ LastName: e.target.value });
  };

  onSubmit(e) {
    e.preventDefault();
    this.props.FormActions(
      this.state.FirstName,
      this.state.LastName,
      this.state.MiddleName
    );
    console.log(this.props) ;
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <div className="ui form">
            <div className="three fields">
              <div className="field">
                <label>First name</label>
                <input
                  onChange={this.FirstName}
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="field">
                <label>Middle name</label>
                <input
                  onChange={this.MiddleName}
                  type="text"
                  placeholder="Middle Name"
                />
              </div>
              <div className="field">
                <label>Last name</label>
                <input
                  type="text"
                  onChange={this.LastName}
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>
          <button className="ui primary button">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormComponents;
