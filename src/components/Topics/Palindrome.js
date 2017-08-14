import React, { Component } from 'react';

class Palindrome extends Component{
    constructor(){
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        };
    }

    updateUserInput(input){
        this.setState({
            userInput: input
        })
    }

    spellChecker(userInput){
        var userPal = this.state.userInput;
        var testPal = '';
        var status = "false";
        for (var i = userPal.length - 1; i >= 0; i--) { 
            testPal += userPal[i];
        }

        if(userPal === testPal)
            status = true;

        this.setState({
            palindrome: status
        })
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input className="inputLine"            onChange={( event ) => this.updateUserInput(event.target.value)}></input>
            <button className="confirmationButton"  onClick={( click )  => this.spellChecker(this.state.userInput)}>Filter</button>
            <span className="resultsBox">Palindrome: { JSON.stringify(this.state.palindrome) }</span>
        </div>
        );
    }


}
export default Palindrome;