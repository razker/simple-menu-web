import React,{ Component } from 'react';
import MenuItem from './MenuItem';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import {ReactComponent as EditLogo} from './../../images/edit-svgrepo-com.svg';

 const Menu = ({menuList, edit, restaurantId}) => {
        return(
            <div class="container">

                <div>
                    {edit &&
                    <div>
                        <Link style={{color: 'red', float:'right', margin: "5px"}} to={{
                            pathname: '/menu-item-edit',
                            itemData: {
                                prevPath: window.location.pathname + window.location.search,
                                isAdmin: true,
                                restaurantId
                            }
                        }}>
                            Add New Menu Item
                            <EditLogo style={{height:'25px', fill:'red', paddingLeft:"5px"}}/>
                        </Link>
                    </div>

                    }
                    {Object.keys(menuList).map( key =>
                        menuList[key].data.length ?
                        <div>
                            <h2 style={{textAlign: 'left', margin: '15px'}}>
                                {menuList[key].title}
                            </h2>
                            <div className="row">
                                {menuList[key].data.map(item =>
                                    <MenuItem
                                        className={'signature'}
                                        title={item.title}
                                        description={item.description}
                                        price={item.price}
                                        edit={edit}
                                        id={item._id}
                                        menuType={key}
                                    />
                                )}
                            </div>
                        </div> : false
                    )}
                </div>
            </div>
        );
}

Menu.propTypes = {
    menuList: PropTypes.array,
    edit: PropTypes.bool
};

Menu.defaultProps = {
    menuList: [],
    edit: false
};

export default Menu;