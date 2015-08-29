import React from 'react';
import fishData from '../../../data/fish.json';

export default class Fish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fishes: [{
          "fishName": "Arctic Char",
          "choiceType": "Best Choice",
          "farmed": "y",
          "notes": "farmed",
          "id": 1
      }, {
          "fishName": "Barramundi",
          "choiceType": "Best Choice",
          "farmed": "y",
          "notes": "US & Vietnam farmed",
          "id": 2
      }, {
          "fishName": "Bass: Striped",
          "choiceType": "Best Choice",
          "farmed": "y",
          "notes": "US hook and line, farmed",
          "id": 3
      }, {
          "fishName": "Catfish",
          "choiceType": "Best Choice",
          "farmed": "n",
          "notes": "US",
          "id": 4
      }, {
          "fishName": "Clams, Mussels & Oysters",
          "choiceType": "Best Choice",
          "farmed": "n",
          "notes": "",
          "id": 5
      }, {
          "fishName": "Cod: Pacific",
          "choiceType": "Best Choice",
          "farmed": "n",
          "notes": "AK",
          "id": 6
      }, {
          "fishName": "Halibut: California",
          "choiceType": "Best Choice",
          "farmed": "n",
          "notes": "US hook and line",
          "id": 7
      }, {
          "fishName": "Lingcod:",
          "choiceType": "Best Choice",
          "farmed": "n",
          "notes": "Canada & US",
          "id": 8
      }, {
          "fishName": "Lobster: Spiny",
          "choiceType": "Best Choice",
          "farmed": "n",
          "notes": "Mexico",
          "id": 9
      }, {
          "fishName": "Prawn: Spot",
          "choiceType": "Best Choice",
          "farmed": "n",
          "notes": "AK",
          "id": 10
      }, {
          "fishName": "Rockfish",
          "choiceType": "Best Choice",
          "farmed": "n",
          "notes": "CA, OR & WA",
          "id": 11
      }, {
          "fishName": "Sablefish/Black Cod",
          "choiceType": "Best Choice",
          "farmed": "n",
          "notes": "AK",
          "id": 12
      }, {
          "fishName": "Salmon",
          "choiceType": "Best Choice",
          "farmed": "n",
          "notes": "AK & New Zealand",
          "id": 13
      }, {
          "fishName": "Sanddab",
          "choiceType": "Best Choice",
          "farmed": "n",
          "notes": "CA, OR & WA",
          "id": 14
      }, {
          "fishName": "Sardines: Pacific",
          "choiceType": "Best Choice",
          "farmed": "n",
          "notes": "Canada & US",
          "id": 15
      }, {
          "fishName": "Scallops",
          "choiceType": "Best Choice",
          "farmed": "y",
          "notes": "farmed",
          "id": 16
      }, {
          "fishName": "Seaweed",
          "choiceType": "Best Choice",
          "farmed": "y",
          "notes": "farmed",
          "id": 17
      }, {
          "fishName": "Shrimp",
          "choiceType": "Best Choice",
          "farmed": "y",
          "notes": "AK wild, US farmed",
          "id": 18
      }, {
          "fishName": "Sole",
          "choiceType": "Best Choice",
          "farmed": "n",
          "notes": "AK, CA, OR & WA",
          "id": 19
      }, {
          "fishName": "Tilapia",
          "choiceType": "Best Choice",
          "farmed": "n",
          "notes": "Ecuador & US",
          "id": 20
      }, {
          "fishName": "Trout: Rainbow",
          "choiceType": "Best Choice",
          "farmed": "y",
          "notes": "US farmed",
          "id": 21
      }, {
          "fishName": "Tuna: Albacore",
          "choiceType": "Best Choice",
          "farmed": "n",
          "notes": "Pacific troll, pole and line",
          "id": 22
      }, {
          "fishName": "Tuna: Skipjack",
          "choiceType": "Best Choice",
          "farmed": "n",
          "notes": "Pacific troll,pole and line",
          "id": 23
      }, {
          "fishName": "Branzino",
          "choiceType": "Good Alternatives",
          "farmed": "y",
          "notes": "Mediterranean farmed",
          "id": 24
      }, {
          "fishName": "Cod: Pacific",
          "choiceType": "Good Alternatives",
          "farmed": "n",
          "notes": "Canada & US trawl",
          "id": 25
      }, {
          "fishName": "Crab: Blue & King",
          "choiceType": "Good Alternatives",
          "farmed": "n",
          "notes": "US",
          "id": 26
      }, {
          "fishName": "Crab: Dungeness",
          "choiceType": "Good Alternatives",
          "farmed": "n",
          "notes": "",
          "id": 27
      }, {
          "fishName": "Crab: Pacific Rock",
          "choiceType": "Good Alternatives",
          "farmed": "n",
          "notes": "CA & OR",
          "id": 28
      }, {
          "fishName": "Halibut",
          "choiceType": "Good Alternatives",
          "farmed": "n",
          "notes": "US Pacific gillnet and trawl",
          "id": 29
      }, {
          "fishName": "Lobster",
          "choiceType": "Good Alternatives",
          "farmed": "n",
          "notes": "Bahamas & US",
          "id": 30
      }, {
          "fishName": "Mahi Mahi",
          "choiceType": "Good Alternatives",
          "farmed": "n",
          "notes": "Ecuador & US",
          "id": 31
      }, {
          "fishName": "Octopus",
          "choiceType": "Good Alternatives",
          "farmed": "n",
          "notes": "Portugal & Spain pot and trap, US",
          "id": 32
      }, {
          "fishName": "Salmon",
          "choiceType": "Good Alternatives",
          "farmed": "n",
          "notes": "Canada, CA, OR & WA wild",
          "id": 33
      }, {
          "fishName": "Scallops",
          "choiceType": "Good Alternatives",
          "farmed": "n",
          "notes": "wild",
          "id": 34
      }, {
          "fishName": "Shrimp",
          "choiceType": "Good Alternatives",
          "farmed": "y",
          "notes": "Canada & US wild, Ecuador farmed",
          "id": 35
      }, {
          "fishName": "Snapper",
          "choiceType": "Good Alternatives",
          "farmed": "n",
          "notes": "US",
          "id": 36
      }, {
          "fishName": "Sole",
          "choiceType": "Good Alternatives",
          "farmed": "n",
          "notes": "British Columbia",
          "id": 37
      }, {
          "fishName": "Squid",
          "choiceType": "Good Alternatives",
          "farmed": "n",
          "notes": "Mexico & US",
          "id": 38
      }, {
          "fishName": "Swordfish",
          "choiceType": "Good Alternatives",
          "farmed": "n",
          "notes": "US",
          "id": 39
      }, {
          "fishName": "Tilapia",
          "choiceType": "Good Alternatives",
          "farmed": "n",
          "notes": "China & Taiwan",
          "id": 40
      }, {
          "fishName": "Tuna: Albacore",
          "choiceType": "Good Alternatives",
          "farmed": "n",
          "notes": "US longline",
          "id": 41
      }, {
          "fishName": "Tuna: Skipjack",
          "choiceType": "Good Alternatives",
          "farmed": "n",
          "notes": "free school, imported troll, pole and line, and US longline",
          "id": 42
      }, {
          "fishName": "Tuna: Yellowfin",
          "choiceType": "Good Alternatives",
          "farmed": "n",
          "notes": "free school, imported troll, pole and line, and HI longline",
          "id": 43
      }, {
          "fishName": "Basa/Pangasius/Swai",
          "choiceType": "Avoid",
          "farmed": "n",
          "notes": "",
          "id": 44
      }, {
          "fishName": "Cod: Pacific",
          "choiceType": "Avoid",
          "farmed": "n",
          "notes": "Japan & Russia",
          "id": 45
      }, {
          "fishName": "Crab: Red King",
          "choiceType": "Avoid",
          "farmed": "n",
          "notes": "Russia",
          "id": 46
      }, {
          "fishName": "Lobster: Spiny",
          "choiceType": "Avoid",
          "farmed": "n",
          "notes": "Belize, Brazil, Honduras & Nicaragua",
          "id": 47
      }, {
          "fishName": "Mahi Mahi",
          "choiceType": "Avoid",
          "farmed": "n",
          "notes": "imported",
          "id": 48
      }, {
          "fishName": "Orange Roughy",
          "choiceType": "Avoid",
          "farmed": "n",
          "notes": "",
          "id": 49
      }, {
          "fishName": "Salmon: Atlantic",
          "choiceType": "Avoid",
          "farmed": "y",
          "notes": "farmed",
          "id": 50
      }, {
          "fishName": "Sardines: Atlantic",
          "choiceType": "Avoid",
          "farmed": "n",
          "notes": "Mediterranean",
          "id": 51
      }, {
          "fishName": "Sharks",
          "choiceType": "Avoid",
          "farmed": "n",
          "notes": "",
          "id": 52
      }, {
          "fishName": "Shrimp",
          "choiceType": "Avoid",
          "farmed": "n",
          "notes": "imported",
          "id": 53
      }, {
          "fishName": "Squid",
          "choiceType": "Avoid",
          "farmed": "n",
          "notes": "imported",
          "id": 54
      }, {
          "fishName": "Swordfish",
          "choiceType": "Avoid",
          "farmed": "n",
          "notes": "imported",
          "id": 55
      }, {
          "fishName": "Tuna: Albacore",
          "choiceType": "Avoid",
          "farmed": "n",
          "notes": "except US troll, pole and line, and longline",
          "id": 56
      }, {
          "fishName": "Tuna: Bluefin",
          "choiceType": "Avoid",
          "farmed": "n",
          "notes": "",
          "id": 57
      }, {
          "fishName": "Tuna: Skipjack",
          "choiceType": "Avoid",
          "farmed": "n",
          "notes": "imported purse seine",
          "id": 58
      }, {
          "fishName": "Tuna: Yellowfin",
          "choiceType": "Avoid",
          "farmed": "n",
          "notes": "except troll, pole and line, and HI longline",
          "id": 59
      }]
     };
  }

  render() {
    console.log(this.state.fishes);
    var fishes = this.state.fishes.map( (fish, i) => {
      var fishStyle = {};
      if (fish.choiceType === 'Best Choice') {
        fishStyle.backgroundColor = '#4CAF50';
      } else if (fish.choiceType === 'Good Alternatives') {
        fishStyle.backgroundColor = '#FFEB3B';
      } else if (fish.choiceType === 'Avoid') {
        fishStyle.backgroundColor = '#FF5252';
      }
      return (
        <div className='card-level-1 fish-card flex-item' key={i} style={fishStyle}>
          <h3>{fish.fishName}</h3>
          <p>Choice Type: {fish.choiceType}</p>
          <p>Notes: {fish.notes}</p>
        </div>
      );
    });
    return <div className='flex-container'>{fishes}</div>
  }
};
