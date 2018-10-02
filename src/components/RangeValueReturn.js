import React, {Component, Fragment} from 'react'

class RangeValueReturn extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Fragment>
                <input className="number-input" />
                <small>and</small>
                <input className="number-input" /> 
            </Fragment>
        )
    }
}

export default RangeValueReturn