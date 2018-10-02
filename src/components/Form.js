import React, {Component} from 'react'
import FormValueReturn from './FormValueReturn.js'
import NumberValueReturn from './NumberValueRetun.js'

class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            selectionValue:""
        }

    }

let
    handleTypeChange = () => {
        let value = document.querySelector("#form-selection-0").value
        if (value === "screen_height"|| value === "screen_width"|| value === "visits"||value === "page_response_time" ){
        this.setState({
            selectionValue:"number"
        })
        }else{
        this.setState({
            selectionValue:"string"
        })
        }
    }

    render(){
        console.log(this.state)
        let value = this.state.selectionValue
        return(
                <div className="array-container">
            <section>
                <button>-</button>
                <form className="event-form" id="form-0">
                    <select className="event-select" id="form-selection-0" onChange={this.handleTypeChange}>
                        <option selected={true} disabled>Event Targeted</option>
                        <option value="last_name" type="string">Last Name</option>
                        <option value="first_name" type="string">First Name</option>
                        <option value="user_email" type="string">User Email</option>
                        <option value="screen_height" type="number">Screen Height</option>
                        <option value="screen_width" type="number">Screen Width</option>
                        <option value="visits" type="number">Number of Visits</option>
                        <option value="page_response_time" type="number">Page Response Time (ms)</option>
                        <option value="Domain" type="string">Domain</option>
                        <option value="path" type="string">File Path</option>
                    </select>
                </form>
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
                </form>
                { value == "string" ? (<FormValueReturn handleTypeChange={this.handleTypeChange} />) : (<NumberValueReturn />) } 
            </section>
        </div>
        )
    }


}
export default Form 