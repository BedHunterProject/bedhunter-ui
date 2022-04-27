import React, { useEffect, useState } from 'react'
import HeroComponent from '../components/HeroComponent'
import Banner from '../components/Banner'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

function Rooms (){

    const [hotels, setHotels] = useState([])
    useEffect(() => {
        var userId = window.sessionStorage.getItem("userId")
        console.log("Hotels collection called")
        fetch(`http://localhost:5000/hotels`, {
            method: 'GET',
            headers: {
                "Content-Type":"application/json"  //json-ben várjuk a responset. nem árt ha van.
            }
        }).then(res => {
            return res.json(); //vissza is kell adni az értéket hogy a then tudja használni.
        }).then((data) => {
            console.log(data);
            setHotels([...data.hotels])
        })
        console.log("Hotels collection finished")
    }, [])

        return (
            <div>
                <HeroComponent hero="roomsHero">
                    <Banner title="Szállodák">
                        <Link to='/rooms' className="btn-primary">Akciók megnézése</Link>
                    </Banner>
                </HeroComponent>
                <div className="card-container">
                    {
                        hotels.map(hotel => (
                            <Card key={hotel.id} title={hotel.name} address={hotel.address} price={hotel.price} />
                        ))
                    }
                </div>
            </div>
        );
    

}
export default Rooms;
