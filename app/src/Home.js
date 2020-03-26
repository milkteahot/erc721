import React, { Component } from 'react'
import {Route} from 'react-router'
import {Link} from 'react-router-dom'

import {issue, tokens} from './images'
import logo from './logo.png'
import MainContainer from './MainContainer'

class Home extends Component {
    render() {
        return (
            <div>
                <div className="Menu-header">
                    <Link to={"/"}><img src={logo} className="App-logo" alt="logo"/></Link>
                    <Link to={"/issue"}><img src={issue} className="Menu-item" alt="issue"/></Link>
                    <Link to={"/tokens"}><img src={tokens} className="Menu-item" alt="tokens"/></Link>
                </div>
                <Route exact path={"/"} component={MainContainer}/>
                {/* <Route exact path={"/issue"} component={}/> */}
            </div>
        )
    }
}

export default Home