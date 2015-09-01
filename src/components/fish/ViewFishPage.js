import React, {Component} from 'react';
import fishData from '../../../data/fish.json';

export default class ViewFishPage extends Component {
  getFishData() {
    return fishData.filter( (fish) => {
      return fish.fishName === decodeURIComponent(this.props.fish);
    });
  }

  render() {
    var fish = this.getFishData();

    return (
      <div>
        <h1>{fish}</h1>
        <p>Pending</p>
      </div>
    );
  }
}
