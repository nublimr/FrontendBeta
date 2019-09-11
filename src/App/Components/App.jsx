import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import './App.css'
import Home from './Home/Home'
import UploadData from './UploadData/UploadData'
import DataTerupload from './DataTerupload/DataTerupload'
import DataKendaraan from './DataKendaraan/DataKendaraan'
import Login from './Login/Login'
import Account from './Account/Account'
import Aside from './Aside'
import Header from './Header'

class App extends React.Component {

  render() {
    return(
      <Router>
        <Route render={({location}) => (
          <TransitionGroup>
              <Header/>
              <Aside/>
            <CSSTransition timeout={300} classNames="fade" key={location.key}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/upload" component={UploadData} />
                <Route path="/login" component={Login} />
                <Route path="/terupload" component={DataTerupload} />
                <Route path="/kendaraan" component={DataKendaraan} />
                <Route path="/account" component={Account} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </Router>
    )
  }
}


export default App;