import logo from './logo.svg';
import React, { Component } from 'react';
import Routes from './Routes';
import ReactDOM from 'react-dom';
import Intro from './Intro';
//ReactDOM.render(<Intro />, document.getElementById('root'));
class App extends Component {

    render() {
        return (
            <Routes />, document.getElementById('root')
        );
    }
}
export default App;

/*
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt } from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = (params) => {
    return (<h1> Welcome User {params.username} </h1>)
}


class App extends Component {

    state = {
        loggedIn: false
    }
    loginHandle = () => {
        this.setState(prevState => ({
            loggedIn: !prevState.loggedIn
        }))
    }
    
    render() {
        return (
        <Router>
            <form>

                <h1 style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>Hi there! Welcome to our education showcase.</h1>

                <p style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>Type your Name and click Enter to begin below!</p>

                <input
                    type="text"
                    style={{
                        textAlign: 'center'
                    }
                    }
                />
                <button onClick={this.loginHandle.bind(this)}
                >Enter</button>


            </form>
            <Route path="/user/:username" exact strict render={({ match }) => (
                this.state.loggedIn ? (<User username={match.params.username} />) : (<Redirect to='/' />)
            )} />

            </Router>
            )
    }
}
*/

//export default App;
