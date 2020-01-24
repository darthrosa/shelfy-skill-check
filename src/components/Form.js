import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render(){
        return(
            <div className="input-container">
                <div className="input-card-top">
                    <img className="input-img"/>
                </div>
                <div className="input-card-bot"> 
                        <input placeholder="Image URL"/>
                        <input placeholder="Product Name"/>
                        <input placeholder="Price"/>
                    <div className="form-buttons">
                        <button>Cancel</button>
                        <button>Add to Inventory</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;