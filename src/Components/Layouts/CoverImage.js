import React from 'react';
import Header from './Header';
import logo from '../../images/logo.png'
import stamp from '../../images/stamp.png';
import {Link} from "react-router-dom";

const CoverImage = ({}) => {
        return (
            <div>
                 <nav className="navbar navbar-default bootsnav no-background navbar-fixed black">
                    <div className="container">  
                        <div className="navbar-header">
                            <div className="navbar-brand">
                                <Link to="/">
                                    <img src={logo} className="logo" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                 </nav>
                 <Header
                    title={'fatty'}
                    imgUrl={stamp}
                 >
                 </Header>
            </div>
        );
};

export default CoverImage;