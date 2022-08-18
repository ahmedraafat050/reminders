import React, { Component } from "react";
import { addReminder, removeReminder, clearReminder } from "./reducers/actions";
import { connect } from "react-redux";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class App extends Component {
  state = {
    text: "",
    date: new Date(),
  };

  render_Reminders = () => {
    const { reminders } = this.props;
    return (
      <ul className="list-group">
        {reminders.map((reminder) => {
          return (
            <li
              key={reminder.id}
              className="list-group-item p-2 rounded bg-white mb-3 d-flex justify-content-between align-items-center"
            >
              <p className="p-0 m-0">{reminder.text}</p>
              <p className="p-0 m-0">
                {moment(new Date(reminder.date)).fromNow()}
              </p>
              <button
                className="border-0 bg-transparent"
                onClick={() => this.props.removeReminder(reminder.id)}
              >
                <i className="fa-solid fa-circle-xmark fa-2x text-danger"></i>
              </button>
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="app shadow-lg py-3 mt-5">
          <div className="container">
            <img src="./reminder.png" alt="" className='mb-3 m-auto d-block' />
            <h1 className="text-center mb-5 text-white">What's on my agenda ?</h1>
            <input
              type="text"
              value={this.state.text}
              placeholder="what you think....?"
              className="form-control mb-3"
              onChange={(e) => this.setState({ text: e.target.value })}
            />
            <DatePicker
              className="form-control mb-3"
              value={this.state.date}
              placeholderText="Enter Date"
              selected={this.state.date}
              onChange={(date) => {
                this.setState({ date });
              }}
              showTimeSelect
              timeFormat="HH:mm"
              dateFormat="d MMMM, yyyy h:mm aa"
              timeCaption="time"
            />
            <button
              className="btn btn-primary py-2 px-5 d-block w-100 mb-3"
              onClick={() => {
                this.props.addReminder(this.state.text, this.state.date);
                this.setState({ text: "", date: "" });
              }}
            >
              Add Reminder
            </button>
            {this.render_Reminders()}
            <button
              className="btn btn-danger py-2 px-5 d-block w-100"
              onClick={() => {
                this.props.clearReminder();
              }}
            >
              Clear Reminders
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return{
//     addReminder: () => dispatch(addReminder())
//   }
// }

function mapStateToProps(state) {
  return {
    reminders: state,
  };
}

export default connect(mapStateToProps, {
  addReminder,
  removeReminder,
  clearReminder,
})(App);
