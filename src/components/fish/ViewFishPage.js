import React, {Component} from 'react';

export default class ViewFishPage extends Component {
  render() {
    return (
      <div>
        <h1>{decodeURIComponent(this.props.fish)}</h1>
        <p>Pending</p>
      </div>
    );
  }
}
