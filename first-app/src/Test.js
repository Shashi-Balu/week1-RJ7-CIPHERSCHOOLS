import React, { Component } from "react";

class Test extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
        };
    }
    render() {
        return (
            <div>
                {!this.state.isLoggedIn ? (
                    <h1>You are Logged Out!</h1>
                ) : (
                    <h1>You are Logged In!</h1>
                )}
                <button onClick={(e) => this.setState({ isLoggedIn: !this.state.isLoggedIn })}>
                    Login
                </button>
            </div>
        );
    }
}
export default Test;
