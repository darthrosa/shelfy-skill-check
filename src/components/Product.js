import React, {Component} from 'react'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleView: true,
            nameInput: '',
            priceInput: 0
        }
    }

    toggleEdit(id){
        this.setState({toggleEdit: !this.state.toggleView});
    }

    handleNameInput(val){
        this.setState({nameInput: val});
    }

    handlePriceInput(val){
        this.setState({priceInput: val});
    }

    // editNameInput = (id) => {
    //     if(!this.state.toggleView)
    //     {
    //         this.props.updateProducts(this.props.product.id, {name: this.state.nameInput || this.props.name})
    //     }
    // }

    // // editPriceInput = (id) => {
    // //     if(!this.state.toggleView)
    // //     {
    // //         this.props.updateProducts(this.props.product.id, {price: this.state.priceInput || this.props.price})
    // //     }
    // // }


    render(){
        const {product} = this.props;
        return(
            <div className="product-box" key={product.id}>
                {<img className="product-img" src={product.image}/>}
                <div classname="product-box-text">
                    <div>{this.state.toggleView 
                    ? <div>{product.name}</div>
                    : <input placeholder='Update Product Name'
                    value={this.state.nameInput}
                    onChange={(e) => this.handleNameInput(e.target.value)}/>}
                    </div>
                    <div>{this.state.toggleView 
                    ? <div>${product.price}</div>
                    : <input placeholder='Update Product Price'
                    value={this.state.priceInput}
                    onChange={(e) => this.handlePriceInput(e.target.value)}/>}
                    </div>
                </div>
                <button onClick={() => this.props.deleteProduct(product.id)}>Delete Product</button>
                <button onClick={() => this.editNameInput(product.id)}>Edit Employee</button>
            </div>

        )
    }
}

export default Product;