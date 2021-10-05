import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact'
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import { useEffect, useState } from 'react';

function App() {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home services={services}></Home>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path='/aboutUs'>
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/service">
            <Service services={services}></Service>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}
export default App;
