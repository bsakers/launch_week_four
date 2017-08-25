import React, { Component } from 'react'
import FirstName from '../components/FirstName'
import LastName from '../components/LastName'
import Address from '../components/Address'
import City from '../components/City'
import State from '../components/State'
import ZipCode from '../components/ZipCode'
import PhoneNumber from '../components/PhoneNumber'
import Email from '../components/Email'

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
      email: "",
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleFirstNameChange(event){
    this.setState({firstName: event.target.value})
    console.log(this.state)
  }
  handleLastNameChange(event){
    this.setState({lastName: event.target.value})
  }
  handleAddressChange(event){
    this.setState({address: event.target.value})
  }
  handleCityChange(event){
    this.setState({city: event.target.value})
  }
  handleStateChange(event){
    this.setState({state: event.target.value})
  }
  handleZipCodeChange(event){
    this.setState({zipCode: event.target.value})
  }
  handlePhoneNumberChange(event){
    this.setState({phoneNumber: event.target.value})
  }
  handleEmailChange(event){
    this.setState({email: event.target.value})
  }
  handleFormSubmit(event){
    event.preventDefault()
    console.log(this.state)
  }

  render() {

    return (
      <form className="callout" id="shipping-address-form">
        <h1>Shipping Address</h1>
        <div>
          <FirstName
            label= 'First Name'
            content= {this.state.firstName}
            name= 'firstName'
            handlerFunction={this.handleFirstNameChange}
          />
        </div>

        <div>
          <LastName
            label= 'Last Name'
            content= {this.state.lastName}
            name= 'lastName'
            handlerFunction={this.handleLastNameChange}
          />
        </div>

        <div>
          <Address
            label= 'Address'
            content= {this.state.address}
            name= 'address'
            handlerFunction={this.handleAddressChange}
          />
        </div>

        <div>
          <City
            label= 'City'
            content= {this.state.city}
            name= 'city'
            handlerFunction={this.handleCityChange}
          />
        </div>

        <div>
          <State
            label= 'State'
            content= {this.state.state}
            name= 'state'
            handlerFunction={this.handleStateChange}
          />
        </div>

        <div>
          <ZipCode
            label= 'Zip Code'
            content= {this.state.zipCode}
            name= 'zipCode'
            handlerFunction={this.handleZipCodeChange}
          />
        </div>

        <div>
          <PhoneNumber
            label= 'Phone Number'
            content= {this.state.phoneNumber}
            name= 'honeNumber'
            handlerFunction={this.handlePhoneNumberChange}
          />
        </div>

        <div>
          <Email
            label= 'Email'
            content= {this.state.email}
            name= 'email'
            handlerFunction={this.handleEmailChange}
          />
        </div>


        <input onClick={this.handleFormSubmit} type="submit" className="button" value="Submit "/>
      </form>
    )
  }
}

export default FormContainer
