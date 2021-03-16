import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './Styles/animate.css';
import './Styles/bootsnav.css';
import './Styles/color.css';
import './Styles/custom.css';
import Home from './Components/Home';
import RestaurantDetails from './Components/RestaurantDetails';
import MenuItemEdit from './Components/MenuItemEdit';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="view">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/restaurant-details" component={RestaurantDetails} />
            <Route exact path="/menu-item-edit" component={MenuItemEdit} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
  
