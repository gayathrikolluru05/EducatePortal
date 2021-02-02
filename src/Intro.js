import React, { Component } from 'react';
//import Mainscreen from './Mainscreen';
//import Routes from './Routes';

//import history from './history';
import { BrowserRouter as  Redirect } from 'react-router-dom';
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Para = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: mediumseagreen;
`;

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
                <Title style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>Hi there! Welcome to our education showcase.</Title>
                
                <Para style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                }}>Type your Name and click Enter to begin below!</Para>

                <input 
                        type="text"
                        style={{
                            textAlign: 'center'
                        } 
                    }
                    onChange={this.handleChange}
                 />
                <Button  onClick= {this.myChangeHandler}
                >Enter</Button>
                
            
            </form>
        );
    }
}

export default Intro;