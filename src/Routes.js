import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Product from './components/Product';

export default function Routes(props) {

    return (
        <Switch>
            <Route 
                exact path='/' component={() => 
                <Dashboard productList={props.productList}
                    deleteProduct={props.deleteProduct}
                    updateProduct={props.updateProduct} />} />
            <Route path='/form' component={Form} />
            <Route path='/product' component={Product} />
            {/* <Route/> */}
        </Switch>
    )
} 