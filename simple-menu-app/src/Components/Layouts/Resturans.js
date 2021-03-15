import React,{ Component } from 'react';

import RestaurantItem from './RestaurantItem';
import PropTypes from "prop-types";

 class Restaurants extends Component {
    constructor(props){
        super(props);
        this.state= {
            restaurantsList: props.restaurantsDetails,
        };
    }
    
    render(){
        const { restaurantsList } = this.state;
        return(
            <div class="container">
                 <div className="row">
                     <h2 style={{textAlign: 'center', margin: '15px'}}>
                         Restaurants List
                     </h2>
                    {restaurantsList.map(item =>
                        <RestaurantItem
                        className={'signature'}
                        title={item.title}
                        description={item.description}
                        restaurantId={item.restaurantId}
                        />
                    )}
                 </div>
            </div>
        );
    }
}

Restaurants.propTypes = {
    restaurantsDetails: PropTypes.array,
};

Restaurants.defaultProps = {
    restaurantsDetails: [],
};

export default Restaurants;