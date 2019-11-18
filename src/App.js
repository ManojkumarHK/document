import React from 'react';
import './App.css';
// import './Home.css';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import {BrowserRouter as  Router,Route,Switch } from 'react-router-dom';

function App() {
  return (
    <div>    
      <Router>
        <Menu /> 
          <Switch>
            <Route exact path="/" component={Home} />     
            <Route exact path="/home" component={Home} />
            <Route  exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/:section" component={Home1} />         
          </Switch>

      </Router>   
    </div>
  );
}

const Home = () => {

  return (
     <div className="homestyle"> 
        <h2> This is the Home Page. </h2>
      </div>
    )

}

const Home1 = () => {

  return (
     <div className="homeestyle"> 
        <h2> Not found. </h2>
      </div>
    )

}
export default App;