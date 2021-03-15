import React, {Component} from 'react';
import axios from 'axios';
import CoverImage from './CoverImage';
import Restaurants from './Resturans';
import SERVER_URL from '../../constants/server';
import Splash from './Splash';
import {Tagline} from './Tagline';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading : true,
            restaurantsList: []
        };
        this.fetchRestaurants = this.fetchRestaurants.bind(this);
    }

    componentDidMount() {
        setTimeout(this.fetchRestaurants,1000);
    }

    fetchRestaurants() {
        axios.get(`${SERVER_URL}/getRestaurantsDetails`)
            .then((response) => {
                this.setState({
                    restaurantsList: response.data,
                    loading: false
                });

            }, (error) => {
                console.log(error);
            });
    }

    render(){
        const { loading, restaurantsList } = this.state;
        return(
            loading ? <Splash /> :
            <div
                className="home"
                ref={element => {this.homeElement = element}}
            >
                <div>
                    <CoverImage />
                    <section id="block">
                        <Restaurants
                            restaurantsDetails={restaurantsList}
                        />
                    </section>
                    <Tagline />
                </div>
            </div>
        );
    }
}

export default Home;