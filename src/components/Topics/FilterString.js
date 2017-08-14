import React, { Component } from 'react';

class FilterString extends Component{
    constructor(){
        super();

        this.state = {
            unFilteredArray: ["Brettly", "Clawfield", "Husky", "Dog"],
            userInput: '',
            filteredArray: []
        };
    }

    updateInput(input){
        this.setState({
            userInput: input
        })
    }

    searchNames(userInput){
        var unFilteredArray = this.state.unFilteredArray;
        var filteredArray = [];
        for(let i = 0; i < unFilteredArray.length; i++){
            if(unFilteredArray[i].includes(userInput))
                filteredArray.push(unFilteredArray[i]);
        }

        this.setState({
            filteredArray: filteredArray
        })
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText">Names: { JSON.stringify(this.state.unFilteredArray) }</span>
            <input className="inputLine"            onChange={( event ) => this.updateInput(event.target.value)}></input>
            <button className="confirmationButton"  onClick={( click )  => this.searchNames(this.state.userInput)}>Filter</button>
            <span className="resultsBox filterStringRB">Filtered Names: { JSON.stringify(this.state.filteredArray) }</span>
        </div>
        );
    }
}
export default FilterString;