import React, {Component} from 'react';
// import logo from "../public/logo.png";

class MainComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <h2>Account</h2>
                {this.props.accounts[0]}
                <h2>Balance</h2>
                {/* {this.props.accountBalance[this.props.accounts[0]]} */}
                <h2>DeedToken instance</h2>
                {this.props.DeedToken.initialized && "True"}
                
            </div>
        )
    }
}

export default MainComponent;