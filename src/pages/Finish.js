import React from 'react';
import HeroComponent from '../components/HeroComponent'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

export default function Finish() {
  return <HeroComponent>
    <Banner title="Sikeres foglalás" subtitle="Kellemes kikapcsolódást kívánunk!">
      <Link to='/' className="btn-primary">Vissza a Kezdőlapra</Link>
    </Banner>
  </HeroComponent>;

}