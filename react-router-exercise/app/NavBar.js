import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div className="navBar">
        <h5><Link to='/greeting'>Default Greeting</Link></h5>
        <h5><Link to='/goodbye'>Default Goodbye</Link></h5>
        <h5><Link to='/customgreeting'>Custom Greeting</Link></h5>
        {this.props.children}
      </div>

    )
  }
}

export default NavBar;
