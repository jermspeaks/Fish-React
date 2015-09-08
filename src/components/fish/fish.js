import React from 'react';
import Router, {Link} from 'react-router';
import fishData from '../../../data/fish.json';

export default class Fish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fishes: fishData
     };
  }

  render() {
    var fishes = this.state.fishes.map( (fish, i) => {
      var fishLink = encodeURIComponent(fish.fishName);

      // Create Fish Class
      var fishClass = '';
      if (fish.choiceType === 'Best Choice') {
        fishClass += 'good-fish-card';
      } else if (fish.choiceType === 'Good Alternatives') {
        fishClass += 'okay-fish-card';
      } else if (fish.choiceType === 'Avoid') {
        fishClass += 'bad-fish-card';
      }
      fishClass += ' card-level-1 fish-card flex-item';

      return (
        <div className={fishClass} key={i}>
          <h3><Link to='fish' params={{fish: fishLink}}>{fish.fishName}</Link></h3>
          <p>Choice Type: {fish.choiceType}</p>
          <p>Notes: {fish.notes}</p>
        </div>
      );
    });
    return <div className='flex-container'>{fishes}</div>
  }
};
