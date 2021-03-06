import React from 'react';
import PropTypes from "prop-types";
import RestaurantItem from './RestaurantItem';

 const Restaurants = ({restaurantsDetails}) => {
    return(
        <div className="container">
             <div className="row">
                 <h2 style={{textAlign: 'center', margin: '15px'}}>
                     Restaurants List
                 </h2>
                {restaurantsDetails.map(item =>
                    <RestaurantItem
                    key={item.restaurantId}
                    className={'signature'}
                    title={item.title}
                    description={item.description}
                    restaurantId={item._id}
                    />
                )}
             </div>
        </div>
    );
}

Restaurants.propTypes = {
    restaurantsDetails: PropTypes.array,
};

Restaurants.defaultProps = {
    restaurantsDetails: [],
};

export default Restaurants;