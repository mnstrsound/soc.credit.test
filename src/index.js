import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, Link, browserHistory } from 'react-router'
import Banner from './Components/Banner';
import Offers from './Components/Offers';

class App extends Component {
    render() {
        return (
            <div className="app">{this.props.children}</div>
        )
    }
}

ReactDOM.render((
    <Router history={ browserHistory }>
        <Route path="/" component={ App }>
            <IndexRoute component={ Banner } />
            <Route path="variants" component={ Offers }/>
        </Route>
    </Router>
), document.getElementById('root'))
