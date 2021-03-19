import React, {Component} from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import CoverImage from './Layouts/CoverImage';
import Splash from "./Layouts/Splash";
import Menu from "./Layouts/Menu";
import {Tagline} from "./Layouts/Tagline";
import { MenuTypes } from "../constants/MenuTypes";
import SERVER_URL from "../constants/server";

class RestaurantDetails extends Component {
    constructor(props){
        super(props);
        const href = new URL(window.location.href);
        const isAdmin = href.searchParams.get("isAdmin");
        const restaurantId =  href.searchParams.get("id");
        this.state = {
            loading : true,
            menuList: [],
            restaurantId,
            isAdmin
        };
        this.fetchMenu = this.fetchMenu.bind(this);
    }

    componentDidMount() {
        this.fetchMenu();
    }

    fetchMenu() {
        const { restaurantId } = this.state;
        axios.get(`${SERVER_URL}/getMenuDetails`, {params:{restaurantId: restaurantId}})
            .then((response) => {
                this.setState({
                    menuList: this.constructMenu(response.data),
                    loading: false
                });
            }, (error) => {
                console.log(error);
            });
    }

    constructMenu(menu) {
        let formattedMenu;

        Object.keys(MenuTypes).forEach( key => {
           const objectToAdd = {
                [key]:{
                    title: MenuTypes[key], data: []
                }
           }
            formattedMenu = {...formattedMenu, ...objectToAdd };
        });

        menu.forEach( item =>  (formattedMenu[item.menuType].data.push(item)));

        return formattedMenu;
    }

    render(){
        const { loading, menuList, isAdmin, restaurantId } = this.state;
        return(
            loading ? <Splash /> :
            <div
                className="home"
            >
                <CoverImage/>
                <section id="block">
                    <Menu
                        menuList={menuList}
                        edit={Boolean(isAdmin)}
                        restaurantId={restaurantId}
                    />
                </section>
                <Tagline />
            </div>
        )
    }
}

export default withRouter(RestaurantDetails);