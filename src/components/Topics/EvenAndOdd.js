import React, { Component } from 'react';

class EvenAndOdd extends Component{
    constructor(){
        super();

    }

    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine"></input>
                <button className="confirmationButton"></button>
                <span className="resultsBox"></span>
                <span className="resultsBox"></span>
            </div>
        );
    }


}
export default EvenAndOdd;