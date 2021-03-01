
import './App.css';
import {Route, Switch, Redirect} from'react-router-dom';
import NavBar from './Components/Navigation/NavBar/NavBar';
import Home from './Containers/Home/Home';
import Shop from './Containers/Shop/Shop';
import About from './Containers/About/About';
import Contact from './Containers/Contact/Contact';
import Signup from './Containers/Signup/Signup';
import Signin from './Containers/Signin/Signin';

import SideDrawer from './Components/Navigation/SideDrawer/SideDrawer';
import { useState } from 'react';


const App = ()=> {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const sideDrawerControll =()=>{
    setSideDrawerOpen(!sideDrawerOpen);
  }

  
  return (
    <div className="App">
      <NavBar menuButtonClicked ={sideDrawerControll} show ={sideDrawerOpen} />
      <SideDrawer linkClicked ={sideDrawerControll} show ={sideDrawerOpen}/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/about' component={About}/>
        <Route path='/signin' component={Signin}/>
        <Route path='/signup' component={Signup}/>
        <Redirect to='/'/>
      </Switch>
    </div>
  );
}

export default App;
