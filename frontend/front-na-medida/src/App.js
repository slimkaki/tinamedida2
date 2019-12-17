import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import History from './components/History'

// Style
import './App.css';

// Pages
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Solutions from './Pages/Solutions.js';
import Cloud from './Pages/Cloud.js';
import Contact from './Pages/Contact.js';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';



const App = () => {
  return(
    <Router history={History}  forceRefresh={true}>
      <div id='App'>
          <Navbar/>
          <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={About}/>
          <Route path='/solutions' exact component={Solutions}/>
          <Route path='/cloud' exact component={Cloud}/>
          <Route path='/contact' exact component={Contact}/>
          <Route path='/portal' exact component={Home}/> {/* exact component={Portal} */}
          </Switch>
          {/* <Footer/> */}
      </div>
    </Router>

  );
}
export default App;
