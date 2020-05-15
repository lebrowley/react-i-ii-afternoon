import React, { Component } from 'react';

class Count extends Component{


    render(){
        return(
            <h1 className='Count'>{this.state.count}/25</h1>
        )}
}

export default Count;