import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Home from './components/Home'
import Login from './components/Login'
import registerServiceWorker from './registerServiceWorker'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
