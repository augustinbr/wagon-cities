import React, { Component } from 'react';

class ActiveCity extends Component {
  static defaultProps = {
    city: { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' }
  }

  render() {
    return (
      <div className="active-city col-sm-7">
        <h1>{this.props.city.name}</h1>
        <p>{this.props.city.address}</p>
        <img src="https://www.sortiraparis.com/images/58/1467/547646-visuel-paris-hotel-de-ville.jpg" alt="paris" />
      </div>
    );
  }
}

export default ActiveCity;
