import React, { Component } from 'react';


class City extends Component {
  render() {
    return (
      <div className="cities">
        <h6>{this.props.name}</h6>
      </div>
    );
  }
}

export default City;
