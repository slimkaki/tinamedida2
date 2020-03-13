import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import History from './components/history'

// Style
import './app.css';

// Pages
import Home from './pages/home.js';
import About from './pages/about.js';
import Solutions from './pages/solutions.js';
import Cloud from './pages/cloud.js';
import Contact from './pages/contact.js';
import Portal from './pages/portal.js';
import Cadastro from './pages/cadastro.js'

// Components
import Navbar from './components/navbar';
import Footer from './components/footer';



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
          <Route path='/portal' exact component={Portal}/>
          <Route path='/cadastro' exact component={Cadastro}/>
          </Switch>
          <Footer/>
      </div>
    </Router>

  );
}
export default App;
