import React, {Component} from 'react';
import Form from './Form';
import Product from './Product';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render(){
        return(
            <div className="dashboard-container">
                <Product/>
                <Form/>
            </div>
        )
    }
}

export default Dashboard;