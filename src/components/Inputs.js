import React, {Component} from 'react'
class Inputs extends Component {
    constructor(props) {
      super(props);
      this.state = {
            totalMileage: 0,
            departureTime: 0,
            returnTime: 0,
            passengerCount: 0,
            daysNeeded: 0,
            roundTrip: ''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit(event) {
      //fix
      alert("You submitted" + this.state.totalMileage, this.state.returnTime)
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>
                    Total Mileage: 
                    <input type="number" value={this.state.value} onChange={this.handleChange} name = "totalMileage"/>
                </label>
            </div>
            <div>
                <label>
                    Departure Time: 
                    <input type="number" value={this.state.value} onChange={this.handleChange} name = "departureTime"/>
                </label>
            </div>
            <div>
                <label>
                    Return Time: 
                    <input type="time" value={this.state.value} onChange={this.handleChange} name = "returnTime"/>
                </label>
            </div>
            <div>
                <label>
                    Total Number Of Passengers Expected: 
                    <input type="time" vaue={this.state.value} onChange={this.handleChange} name = "passengerCount"/>
                </label>
            </div>
            <div>
                <label>
                    Days You Will Need A Bus: 
                    <input type="number" value={this.state.value} onChange={this.handleChange} name = "daysNeeded"/>
                </label>
            </div>
            <div>
                <label>
                    Round trip? 
                    <input type="checkbox" value={this.state.value} onChange={this.handleChange} name = "roundTrip"/>
                </label>
            </div>
        </form>
      );
    }
  }
  export default Inputs;
