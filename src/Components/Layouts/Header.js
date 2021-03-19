import React, { Component } from 'react';

class Header extends Component {
    render(){
        const {
            title,
            imgUrl,
            handlePageChange,
            children
        }= this.props;

        return(
            <header id="hello">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="banner">
                            <div className="inner_banner">
                                <div>
                                    {children}
                                </div>
                                }
                                
                                <div className="stamp">
                                    <img 
                                        src={imgUrl} 
                                        onLoad={handlePageChange}
                                        onError={handlePageChange}
                                        alt="" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        )
    }
}

export default Header;