import React, { useEffect, useState } from 'react'
import HeroComponent from '../components/HeroComponent'
import Banner from '../components/Banner'
import PromotionsCard from '../components/PromotionsCard'
import { Link } from 'react-router-dom'

function Rooms (){
  const [rooms, setRooms] = useState([])
    useEffect(() => {
        var userId = window.sessionStorage.getItem("userId")
        console.log("Rooms collection called")
        fetch(`http://localhost:5000/rooms`).then(res => res.json()).then((data) => setRooms([...data.rooms]))
        console.log("Rooms collection finished")
    }, [])
    
    return <>
  <HeroComponent hero="promotionsHero">
    <Banner title="Akciók">
    </Banner>
  </HeroComponent>
  <div className="card-container">
                    {
                        rooms.map(room => (
                            <PromotionsCard key={room.id} hotel_name={room.hotel_name} beds_number={room.beds_number} date_start={room.date_start} date_end={room.date_end} price={room.price} />
                        ))
                    }
                </div>
</>
};
export default Rooms;