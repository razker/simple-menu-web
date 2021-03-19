import React, {Component} from 'react';
import { withRouter } from 'react-router';
import CoverImage from './Layouts/CoverImage';
import Splash from "./Layouts/Splash";
import {Tagline} from "./Layouts/Tagline";
import {Link} from "react-router-dom";
import { Redirect } from 'react-router'
import { MenuTypes } from '../constants/MenuTypes';
import axios from "axios";
import SERVER_URL from "../constants/server";

class MenuItemEdit extends Component {
    constructor(props){
        super(props);
        const { itemData } = this.props.location;
        this.state = {
            loading : true,
            fireRedirect: false,
            id : itemData && itemData.id,
            restaurantId: itemData && itemData.restaurantId,
            title: itemData && itemData.title,
            description: itemData && itemData.description,
            price : itemData && itemData.price,
            menuType: itemData && itemData.menuType || Object.keys(MenuTypes)[0],
            prevPath: itemData && itemData.prevPath,
            isAdmin: itemData && itemData.isAdmin,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete= this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.setState({loading:false});
    }

    handleSubmit(event) {
        const { id, title, description, price, menuType, restaurantId } = this.state;

        event.preventDefault();
        this.setState({loading: true});

        if (id) {
            axios.put(`${SERVER_URL}/updateMenuItem`, {id, title, description, price, menuType})
                .then((response) => {
                    this.setState({loading: false, fireRedirect: true});
                }, (error) => {
                    console.log(error);
                });
        } else {
            axios.post(`${SERVER_URL}/createMenuItem`, {restaurantId, title, description, price, menuType})
                .then((response) => {
                    this.setState({loading: false, fireRedirect: true});
                }, (error) => {
                    console.log(error);
                });
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleDelete(){
        const { id } = this.state;

        this.setState({loading: true});

        axios.delete(`${SERVER_URL}/deleteMenuItem`, {data:{id}})
            .then((response) => {
                this.setState({loading: false, fireRedirect: true});
            }, (error) => {
                console.log(error);
            });
    }

    render(){
        const { loading, title, description, price, id, menuType, isAdmin, fireRedirect, prevPath } = this.state;
        if(!isAdmin){
            return (
                <section>
                    <div className="container">
                        <h2 style={{textAlign: 'center', margin: '30px', color:'#AD1E02'}}>Only admins can edit menus!</h2>
                        <Link to="/">
                            <button class="btn orange" type="button">
                                <span>Return to Home Page</span>
                            </button>
                        </Link>
                    </div>
                </section>
            )
        }

        return(
            loading ? <Splash /> :
            <div
                className="home"
            >
                <CoverImage/>
                <h2 style={{textAlign: 'center', margin: '15px'}}>
                    Edit Menu Item
                </h2>
                <form onSubmit={this.handleSubmit} encType="multipart/form-data" autoComplete="off">
                    <div className="details">
                        <h3>Menu Type</h3>
                        <select name="menuType"  className="form-control" value={menuType} onChange={this.handleChange}>
                            {Object.keys(MenuTypes).map(key => (
                                <option key={key} value={key} >{MenuTypes[key]}</option>
                            ))}
                        </select>
                    </div>
                    <div className="details">
                        <h3>Title</h3>
                        <input name="title" type="text" className="form-control" placeholder="title"
                               value={title}
                               required="required"
                               onChange={this.handleChange} />
                    </div>
                    <div className="details">
                        <h3>Description</h3>
                        <input name="description" type="text" className="form-control" placeholder="description"
                               value={description}
                               required="required"
                               onChange={this.handleChange} />
                    </div>
                    <div className="details">
                        <h3>Price</h3>
                        <input name="price" type="number" className="form-control" placeholder="price"
                               value={price}
                               required="required"
                               onChange={this.handleChange} />
                    </div>
                    <div>
                        <input style={{padding:'5px', width: "180px"}} type="submit" className="btn" value="Save Item"/>
                        {
                        id &&
                        <input onClick={this.handleDelete} style={{padding:'5px', width: "180px"}} type="button" className="btn" value="Delete Item"/>
                        }
                    </div>


                </form>
                <Tagline />
                {fireRedirect && (
                    <Redirect to={prevPath || '/'}/>
                )}
            </div>
        )
    }
}

export default withRouter(MenuItemEdit);