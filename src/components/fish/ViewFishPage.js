import React, {Component, createFragment} from 'react';
import fishData from '../../../data/fish.json';

export default class ViewFishPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fishName: decodeURIComponent(props.params.fish)
    };
    this.state.data = this.getFishData()[0];
  }

  getFishData() {
    return fishData.filter( (fish) => {
      return fish.fishName === decodeURIComponent(this.state.fishName);
    });
  }

  render() {
    console.log(this.state.data);
    var imageAlt = `Image of ${this.state.data.fishName}`;
    var showImage;

    if (this.state.data.image) {
      showImage = (
        <img src={this.state.data.image} alt={imageAlt} />
      );
    }

    return (
      <div>
        <h1>{this.state.data.fishName}</h1>
        <h3>Choice Type: {this.state.data.choiceType}</h3>
        <h4>Notes: {this.state.data.notes}</h4>
        <div>{showImage}</div>
      </div>
    );
  }
}
