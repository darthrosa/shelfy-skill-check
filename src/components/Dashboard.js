import React, {Component} from 'react';
import Product from './Product';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    }



    render(){
        return(
            <ul className="product-list">
                {
                    this.props.productList.map(product => (
                        <Product
                        product={product}
                        key={product.id}
                        deleteProduct={this.props.deleteProduct}
                        updateProduct={this.props.updateProduct}/>
                    ))
                }
            </ul>
        )
    }
}

export default Dashboard;