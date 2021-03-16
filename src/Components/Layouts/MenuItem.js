import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import {ReactComponent as EditLogo} from './../../images/edit-svgrepo-com.svg';

const MenuItem = ({
    className,
    title,
    description,
    price,
    edit,
    id,
    menuType
}) => {
        return (
                    <div className="col-sm-4">
                        <div className={className}>
                            {edit &&
                            <Link to={{
                                pathname: '/menu-item-edit',
                                itemData: {
                                    title,
                                    description,
                                    price,
                                    id,
                                    menuType,
                                    prevPath: window.location.pathname + window.location.search,
                                    isAdmin: true
                                }
                            }}>
                                <EditLogo style={{height:'25px', fill:'white', float:'right', marginTop:'5px'}}/>
                            </Link>
                            }
                            <div className="shape">
                                <span className="flaticon flaticon-burger"></span>
                                <p>{title}</p>
                                <p>{Number(price).toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                })}</p>
                            </div>
                            <div className="signature_content">
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
        );
};

MenuItem.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    edit: PropTypes.bool,
    id: PropTypes.string,
    menuType: PropTypes.string
};

MenuItem.defaultProps = {
    className: '',
    title: '',
    description: '',
    price: '',
    bool: false,
    id: '',
    menuType: ''
};

export default withRouter(MenuItem);