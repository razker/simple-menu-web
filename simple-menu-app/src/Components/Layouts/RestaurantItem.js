import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const RestaurantItem = ({
    className,
    title,
    description,
    restaurantId
}) => {
        return (
                    <div className="col-sm-4">
                        <Link to={{
                            pathname: '/restaurant-details',
                            search: `id=${restaurantId}`
                        }}>
                            <div className={className}>
                                <div className="shape">
                                    <span className="flaticon flaticon-burger"></span>
                                    <p>{title}</p>
                                </div>
                                <div className="signature_content">
                                    <p>{description}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
        );
};

RestaurantItem.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    restaurantId: PropTypes.string,
};

RestaurantItem.defaultProps = {
    className: '',
    title: '',
    description: '',
    restaurantId:''
};

export default withRouter(RestaurantItem);