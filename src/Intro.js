import React, { Component } from 'react';
import Mainscreen from './Mainscreen';
import Routes from './Routes';

import history from './history';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '',value:false };
        this.myChangeHandler = this.myChangeHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    myChangeHandler (event) {
        this.setState({ value: true });
       
        }

    handleChange  (event) {
        this.setState({ username: event.target.value });
        
    }

    render() {
        if (this.state.value) {
            //return <Redirect to='/mainscreen/this.state.username' />
            return <Redirect to={{
                pathname: "/mainscreen",
                state: { username: this.state.username }
            }} />
        }
        return (
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
                    onChange={this.handleChange}
                 />
                <button  onClick= {this.myChangeHandler}
                >Enter</button>
                
            
            </form>
        );
    }
}

export default Intro;