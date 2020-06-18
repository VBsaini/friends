import React, {Component} from "react";

class  Errorboundary extends Component{
    constructor(props){
        super()
        this.state = {
            haserror:false
        }
    }
    componentDidCatch(error, info){
        this.setState({haserror:true})
    }
    render(){
        return this.state.haserror ?
            <h1>oopps something went wrong</h1> :
            this.props.children
        
    }
}

export default Errorboundary;