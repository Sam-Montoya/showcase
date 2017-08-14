import React, { Component } from 'react';

class Sum extends Component{
    constructor(){
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    updateNumOne(input){
        this.setState({
            number1: input
        });
    }

    updateNumTwo(input){
        this.setState({
            number2: input
        });
    }

    calculateSum(){
        var numOne = parseInt(this.state.number1);
        var numTwo = parseInt(this.state.number2);
        
        this.setState({
            sum: numOne + numTwo
        })
    }

    render(){
        return(
            <div className="puzzleBox sumPB">
            <h4>Sum</h4>
            <input className="inputLine"            onChange={( event ) => this.updateNumOne(event.target.value)}></input>
            <input className="inputLine"            onChange={( event ) => this.updateNumTwo(event.target.value)}></input>
            <button className="confirmationButton"  onClick={( click )  => this.calculateSum()}>Filter</button>
            <span className="resultsBox filterStringRB">Sum: { JSON.stringify(this.state.sum) }</span>
        </div>
        );
    }


}
export default Sum;