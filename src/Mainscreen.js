import React, { Component  }  from 'react';
import './App.css';
import ReactModal from 'react-modal';
//import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
//import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styled from 'styled-components';


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



class Mainscreen extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.location.state.username, college_name: " ", showModal: false, colleges: [], data: [],
            student_details: [],   name: " ", majors: " ", startdate: " ", enddate: " " 
        };
        //[single_college, setSingle_college] = React.useState({ name: "", majors: "", startdate: "", enddate: "" });


        this.binds = this.binds.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange_startdate = this.handleChange_startdate.bind(this);
        this.handleChange_enddate = this.handleChange_enddate.bind(this);
        //this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentWillMount() {
        fetch('http://universities.hipolabs.com/search?country=india', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
        })
            .then(results => results.json())
            .then(data => this.setState({ data: data })
            )
    }
    
    binds(e) {
        
        this.setState({ name: e.target.value  });
        
    }

    handleChange(e) {
        this.setState({ majors: e.target.value });
    }

    handleChange_startdate(e2) {
        this.setState({startdate: e2.target.value });
    }

    handleChange_enddate(e3) {
        this.setState({ enddate: e3.target.value  });

    }   

    handleOpenModal() {
        this.setState({ showModal: true});
    }

    handleCloseModal() {
       
        this.setState({ student_details: [{ name: this.state.name, majors: this.state.majors, startdate: this.state.startdate, enddate: this.state.enddate }, ...this.state.student_details] });
        this.setState({ showModal: false });
        
     
    }

    
    render() {
        if (this.state.showModal) {
            
            return (<ReactModal isOpen={this.state.showModal}
                contentLabel="Add Education"><h2> Add Education to {this.state.username}</h2>
                <form>
                    <p> College Name: </p>
                    <div>

                        <select name="name" onChange={this.binds}>
                            {
                                this.state.data.map(obj =>
                                    <option key={obj.name}>{obj.name}</option>
                                )
                            }
                        </select>

                    </div>
                
                <p> Major: </p>
                
                <input
                    type="text"
                    name="majors"
                    onChange={this.handleChange}
                  
                    
                />

                    <p> Start Date: </p>
                <input
                    type="date"
                    name="startdate"
                    //value={this.state.singlecollege.startdate}
                    style={{
                        textAlign: 'center'
                    }
                    }
                    onChange={this.handleChange_startdate}
                />
                <p> End Date: </p>
                <input
                    type="date"
                    name="enddate"
                    //value={this.state.singlecollege.enddate}
                    style={{
                        textAlign: 'center'
                    }
                    }
                    onChange={this.handleChange_enddate}
                    />

                    
                </form>

                    <Button onClick={this.handleCloseModal}>Add</Button></ReactModal>);
               
        }

       
        return (
            <form >

                <div >
                    <Title style={{
                    
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                    
                    } 
                    }> Welcome to {this.state.username}'s educational  Portal.</Title>
                
               
                    <Button onClick={this.handleOpenModal}
                    >Add Education</Button>
                </div>
              

                <div>
                    <div class="left">
                        <Title> Bookmarks</Title>
                        
                        <div>
                            <ul>
                                {
                                    this.state.student_details.map(link =>
                                        <li key={link.name}>< a href="#{link.name}" >{link.name}</a></li>
                                    )
                                }
                            </ul>
                        </div>
                        
                        
                    </div>


                    <div class="right">
 
                    <Title> Colleges List</Title>

                        
                        
                        
                        <div>
                            <ul>
                                {
                                    this.state.student_details.map(link =>
                                        <div>
                                            <h2 id="{link.name}">{link.name} </h2>
                                            <li key={link.name}>Name: {link.name}</li>
                                            <li key={link.majors}>Majors: {link.majors}</li>
                                            <li key={link.startdate}>Start Date: {link.startdate}</li>
                                            <li key={link.enddate}>End Date: {link.enddate}</li>
                                        </div>
                                    )
                                }
                            </ul>
                        </div>
                        
                    </div>

               </div>

            </form>
        );
    }
}

export default Mainscreen;