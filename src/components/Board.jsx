// src/components/Board.jsx
import React from 'react'
import Card from './Card'

// pull in each image asset
import elgordoImg     from '../assets/elgordo.jpg'
import hodadImg       from '../assets/hodad.jpeg'
import itsrawImg      from '../assets/itsraw.jpg'
import lomaImg        from '../assets/loma.jpeg'
import luchalibreImg  from '../assets/luchalibre.jpg'
import mootimeImg     from '../assets/mootime.jpg'
import philsImg       from '../assets/phils.jpg'
import sdfoodImg      from '../assets/sdfood.jpg'
import sidecarImg     from '../assets/sidecar.jpg'
import tacostandImg   from '../assets/tacostand.webp'
import yintangImg     from '../assets/yintang.jpg'

const spots = [
  {
    name: 'Tacos El Gordo',
    description: 'Authentic Tijuana-style tacos with house-made tortillas.',
    link: 'http://tacoselgordobc.com/',
    image: elgordoImg,
  },
  {
    name: 'Hodad’s',
    description: 'Iconic burgers with a beach vibe.',
    link: 'https://hodadies.com/',
    image: hodadImg,
  },
  {
    name: 'Its Raw Poke',
    description: 'Tasty poke bowls with fresh ingredients.',
    link: 'https://itsrawpokeshop.com/#home',
    image: itsrawImg,
  },
  {
    name: 'Point Loma Seafoods',
    description: 'Fresh catch and casual waterfront dining.',
    link: 'https://pointlomaseafoods.com/menu/',
    image: lomaImg,
  },
  {
    name: 'Lucha Libre Taco Shop',
    description: 'Unique taco creations in a lucha libre-themed setting.',
    link: 'https://www.luchalibretacoshop.com/menu/',
    image: luchalibreImg,
  },
  {
    name: 'MooTime Creamery',
    description: 'Custom shakes and ice cream treats.',
    link: 'https://mootimecreamerysd.com/menu/',
    image: mootimeImg,
  },
  {
    name: 'Phil’s BBQ',
    description: 'Famous baby back ribs and hearty sides.',
    link: 'https://www.letstaco.com/menu',
    image: philsImg,
  },
  {
    name: 'Point Loma',             
    description: 'Best waterfront dining.',
    link: 'https://pointlomaseafoods.com/menu',
    image: sdfoodImg,
  },
  {
    name: 'Sidecar Doughnuts & Coffee',
    description: 'Gourmet doughnuts and artisan coffee.',
    link: 'https://sidecardoughnuts.com/menu/',
    image: sidecarImg,
  },
  {
    name: 'The Taco Stand',
    description: 'Fresh salsa and handmade tortillas.',
    link: 'https://www.thetacostand.com',
    image: tacostandImg,
  },
  {
    name: 'Yintang',
    description: 'Best Hot Pot',
    link: 'https://www.yintangsandiego.com/',
    image: yintangImg,
  },
]

export default function Board() {
  return (
    <div className="board">
      {spots.map((spot, idx) => (
        <Card key={idx} {...spot} />
      ))}
    </div>
  )
}
