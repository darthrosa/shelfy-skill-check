import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: null,
            name: '',
            price: 0
        }
        
        this.handlenNameInput = this.handleNameInput.bind(this)
        this.handlePriceInput = this.handlePriceInput.bind(this)
    }

    handleImageInput(e) {
        this.setState({image: e.target.value})
    }

    handleNameInput(e) {
        this.setState({name: e.target.value})
    }

    handlePriceInput(e) {
        this.setState({price: e.target.value})
    }

    render(){
        return(
            <div className="input-container">
                <div className="input-card-top">
                    <img id="input-img"/>
                </div>
                <div id="input-card-bot"> 
                        <input onChange={(e) => this.handleImageInput(e)} value={this.state.image}placeholder="Image URL"/>
                        <input onChange={(e) => this.handleNameInput(e)} value={this.state.name} placeholder="Product Name"/>
                        <input onChange={(e) => this.handlePriceInput(e)} value={this.state.price} placeholder="Price"/>
                    <div className="form-buttons">
                        <button>Cancel</button>
                        <button
                            onClick={() => this.props.createProduct(
                                {
                                    image: this.state.image ? this.state.image : 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg',
                                    name: this.state.name,
                                    price: this.state.price
                                }
                            )
                        }
                        >Add to Inventory</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;