import React from 'react';
import Board from './components/Board';
import './App.css';

const foodPlaces = [
  {
    id: 1,
    name: "Tacos el gordo",
    description: 'Authentic Tijuana-style tacos and the best in the nation',
    image: 'src/assets/tacos-el-gordo.jpg',
    menu: 'http://tacoselgordobc.com/menu/'
  },
  {
    id: 2,
    name: "Yintang Spicy Hot Pot",
    description: 'Casual, inviting eatery offering customizable hot pots and dry pots, plus spicy soup bases.',
    image: 'src/assets/yintang.jpg',
    menu: 'https://www.yintangsandiego.com/'
  },
  {
    id: 3,
    name: "Alexander 30th",
    description: 'Upscale Italian eatery\'s all-white dining room & classic menu create a modern, yet romantic scene.',
    image: 'src/assets/alexander.jpg',
    menu: 'https://www.alexanderson30th.com/menu'
  },
  {
    id: 4,
    name: "It's raw Poke Shop",
    description: 'Bowls of raw, seasoned fish plus other Hawaiian fare served out of a snug joint with no seating.',
    image: 'src/assets/its-raw-poke.jpg',
    menu: 'https://itsrawpokeshop.com/#menu'
  },
  {
    id: 5,
    name: "Pho Cow Cali",
    description: 'A mix of rice, rolls, noodle soups & veggie options served in a compact strip-mall spot since 1989.',
    image: 'src/assets/pho-cow-cali.jpg',
    menu: 'https://phocowcali.store/menu'
  },
  {
    id: 6,
    name: "Manna BBQ",
    description: 'Traditional Korean BBQ cooked on table grills in laid-back surrounds with many booths',
    image: 'src/assets/manna.jpeg',
    menu: 'https://mannakbbqsd.com/menu/'
  },
  {
    id: 7,
    name: "Koon Thai",
    description: 'Modern Thai restaurant serving traditional dishes in striking, colorful surrounds.',
    image: 'src/assets/koonthai.jpeg',
    menu: 'https://koonthaikitchen.com/menu'
  },
  {
    id: 8,
    name: "Blue Ocean / Harumama",
    description: 'Asian fusion restaurant offering sushi, ramen, and bao buns in a trendy space with ocean views.',
    image: 'src/assets/blue-ocean.jpg',
    menu: 'https://www.harumamasd.com/la-jolla-menu'
  },
  {
    id: 9,
    name: "Mike's Red Tacos",
    description: 'Casual spot offering Mexican fare with a focus on beef birria tacos served with consommé for dipping',
    image: 'src/assets/mikes-red-tacos.jpg',
    menu: 'https://www.mikesredtacos.com/menu'
  },
  {
    id: 10,
    name: "Pomegranate",
    description: 'Borscht, blini & other Russian fare in a homey, candlelit space with occasional live music.',
    image: 'src/assets/pomegranate.jpg',
    menu: 'https://www.pomegranatesd.com/menu'
  }
];

const App = () => {
  return(
    <div className="app">
      <div className="header">
        <h1>Best Food Places in San Diego for students</h1>
      </div>
      <Board items={foodPlaces} />
    </div>
  ) 
}

export default App;