import React, {Component} from 'react'

class FormValueReturn extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <form id="form-1">
            <select>
                <option value="starts_with">Starts With</option>
                <option value="does_not_start_with">Does Not Start With</option>
                <option value="equals">Equals</option>
                <option value="does_not_equal">Does Not Equal</option>
                <option value="contains">Contains</option>
                <option value="does_not_contain">Does Not Contain</option>
                <option value="in_list">In List</option>
                <option value="not_in_list">Not In List</option>
                <option value="contains_all">Contains All</option>
            </select>
            <input></input>
        </form>
        )
    }
}

export default FormValueReturn