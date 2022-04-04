import React from 'react'
import HeroComponent from '../components/HeroComponent'
import Banner from '../components/Banner'
import Card from '../components/Card'
import {Link} from 'react-router-dom'

class Rooms extends React.Component {
    state = {
        hotels: []
    };

    async componentDidMount() {
        const hotels = await this.getHotels()
        this.setState({
            hotels: hotels
        })
    }

    render() {
        const hotels = this.state.hotels
        return (
            <div>
                <HeroComponent hero="roomsHero">
                    <Banner title="Akciók">
                      <Link to='/promotions' className="btn-primary">Akciók megnézése</Link>
                    </Banner>
                </HeroComponent>
                <div className="card-container">
                    {
                        hotels.map(hotel => (
                            <Card key={hotel.id} title={hotel.name} image={hotel.image} description="sanyika"/>
                        ))
                    }
                </div>
            </div>
        );
    }

    async getHotels() {
        const res = await fetch('http://localhost:5000/hotels')
        return await res.json();
    }
}
export default Rooms;
