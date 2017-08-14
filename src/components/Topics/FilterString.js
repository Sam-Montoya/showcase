import React, { Component } from 'react';

class FilterString extends Component{
    render(){
        return(
            <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText"></span>
            <input className="inputLine"></input>
            <button className="confirmationButton">Filter</button>
            <span className="resultsBox filterStringRB"></span>
        </div>
        );
    }
}
export default FilterString;