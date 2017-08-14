import React, { Component } from 'react';

class FilterObject extends Component{
    constructor(){
        super();

        this.state = {
            laptops: [
              {
                type: 'Mac',
                title: 'Air',
                year: 2014,
              },
              {
                type: 'Windows',
                year: 2007,
                color: 'white'
              },
              {
                type: 'Linux',
                color: 'Red',
                numPad: true
              }
            ],
      
            userInput: '',
            filteredLaptops: []
          }
        }

        updateInput(userSearch){
            this.setState({
                userInput: userSearch
            });
        }
        filterLaptops(search){
            var unfilteredLaptops = this.state.laptops;
            var filteredLaptops = [];
            for(var i = 0; i < unfilteredLaptops.length; i++){
                if(unfilteredLaptops[i].hasOwnProperty(search))
                    filteredLaptops.push(unfilteredLaptops[i]);
            }
            this.setState({
                filteredLaptops: filteredLaptops
            })
        }

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">Unfiltered: { JSON.stringify(this.state.laptops) }</span>
            <input className="inputLine"            onChange={( change )=> this.updateInput(change.target.value)}></input>
            <button className="confirmationButton"  onClick={( click ) => this.filterLaptops(this.state.userInput) }>Filter</button>
            <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredLaptops) }</span>
        </div>
        );
    }


}
export default FilterObject;