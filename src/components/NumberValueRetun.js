import React, {Component} from 'react'

class NumberValueReturn extends Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(
        <div>
            <form id="form-3">
                <small>is</small>
                <select>
                    <option>Range</option>
                    <option>Less Than Or Equal To</option>
                    <option>Equals</option>
                    <option>Does Not Equal</option>
                    <option>Greater Than Or Equal TO</option>
                </select>
                <input className="number-input" />
                <small>and</small>
                <input className="number-input" />
            </form>

        </div>
        )
    }
}

export default NumberValueReturn