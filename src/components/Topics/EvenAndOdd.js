import React, { Component } from 'react';

class EvenAndOdd extends Component{
    constructor(){
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        };
    }

    getNum(userNumbers){
        this.setState({userInput: userNumbers})
    }

    updateArray(userInput){
        var arr = userInput.split(',');
        var evens = [];
        var odds = [];
    
        for ( var i = 0; i < arr.length; i++ ) {
          if ( arr[i] % 2 === 0 ) {
            evens.push( parseInt(arr[i]) );
          } else {
            odds.push( parseInt(arr[i]) );
          }
        }

        this.setState({
            evenArray: evens,
            oddArray: odds
        })
    }
    
    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine"            onChange={( click ) => this.getNum(click.target.value)}></input>
                <button className="confirmationButton"  onClick ={( click ) => this.updateArray(this.state.userInput)}>Split</button>
                <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: { JSON.stringify(this.state.oddArray) }</span>
            </div>
        );
    }


}
export default EvenAndOdd;