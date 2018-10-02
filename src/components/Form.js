import React, {Component} from 'react'
import FormValueReturn from './FormValueReturn.js'
import NumberValueReturn from './NumberValueRetun.js'
import '../styles/app.css'

class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            selectionValue:"string"
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
        <div>
            <section className="array-container">
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
                { value === "string" ? (<FormValueReturn handleTypeChange={this.handleTypeChange} />) : (<NumberValueReturn />) } 
            </section>
        </div>
        )
    }


}
export default Form 