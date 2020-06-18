import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
import Scroll from "../components/scroll";
import Searchbox from "../components/Searchbox"
import Errorboundary from "../components/Errorboundary"
import "./app.css"

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots:[],
            searchfield:""
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(user =>this.setState({robots:user}))
    }
    onsearchchange = (event) =>{
        this.setState({searchfield: event.target.value})
    }
    render(){
        const {robots, searchfield} = this.state;
        const robotfiltered = robots.filter(robots => {
            return robots.username.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ? 
        <h1 className="tc">Loading</h1> :
        (
            <div className="tc">
                <h1 className="f2">RoboFriends</h1>
                <Searchbox searchchange = {this.onsearchchange}/>
                <Scroll>
                    <Errorboundary>
                        <Cardlist robots={robotfiltereds}/>
                    </Errorboundary>
                </Scroll>
            </div>
        );
    }
}

export default App;