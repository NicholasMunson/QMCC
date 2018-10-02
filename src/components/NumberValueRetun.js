import React, {Component} from 'react'
import RangeValueReturn from './RangeValueReturn';
import NumberInputReturn from './NumberInputReturn';

class NumberValueReturn extends Component{
    constructor(props){
        super(props)
        this.state = {
            value:""
        }
    }
    handleRange = () => {
        let currentValue = document.querySelector("#number-select").value
        console.log(currentValue)
        if(currentValue = "range"){
            this.setState=({
                value: "true"
            })
        }
    }
    render(){
        let range = this.state.value
        console.log(range)
        return(
            <div>
                <form id="form-3">
                    <small>is</small>
                    <select id="number-select" onChange={this.handleRange} >
                        <option value="">Less Than Or Equal To</option>
                        <option value="">Equals</option>
                        <option value="">Does Not Equal</option>
                        <option value="">Greater Than Or Equal TO</option>
                        <option value="true">Range</option>
                    </select>
                    { range == ! "true" ? (<NumberInputReturn />)  : (<RangeValueReturn />) }
                </form>
            </div>
        )
    }
}

export default NumberValueReturn