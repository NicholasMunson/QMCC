import React, {Component} from 'react'
import FormValueReturn from './FormValueReturn.js'

class Form extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
                <div className="array-container">
            <section className="form-selections">
                <button>-</button>
                <form className="event-form" id="form-0">
                    <select>
                    <option disabled selected>Event Targeted</option>
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
            </section>
        </div>
        )
    }


}
export default Form 