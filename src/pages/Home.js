import React from 'react'
import HeroComponent from "../components/HeroComponent"
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

export default function Home() {
  return <HeroComponent>
  <Banner title="Üdvözöllek a Bed Hunter weboldalán!" subtitle="">
    <Link to='/rooms' class="btn-primary">Szállodák megtekintése</Link>
    
    <Link to='/promotions' class="btn-primary">Akcióink megtekintése</Link>
  </Banner>
  </HeroComponent>;

  
}


