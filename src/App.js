import React, {Component} from 'react';
import axios from 'axios';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Form from './components/Form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productList: []
    }
    this.createProduct = this.createProduct.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
    this.updateProduct = this.updateProduct.bind(this)
}

componentDidMount(){
    axios.get('/api/products').then(res => {
        this.setState({productList: res.data});
    })
    .catch(err => console.log(err));
}

createProduct(body){
  axios.post('/api/products', body).then(res => {
      this.setState({productList: res.data})
  })
  .catch(err => console.log(err));
}

deleteProduct(id){
    axios.delete(`/api/products/${id}`).then(res => {
        this.setState({productList: res.data});
    })
    .catch(err => console.log(err));
}

updateProduct(id, body){
    axios.put(`/api/products/${id}`, body).then(res => {
        this.setState({productList: res.data});
    })
    .catch(err => console.log(err));
}

  render(){
    return (
    <div className="App">
      <Header/>
      <Dashboard productList={this.state.productList}
                 deleteProduct={this.deleteProduct}
                 updateProduct={this.updateProduct}/>
      <Form createProduct={this.createProduct}/>
      
    </div>
    )
  };
};
  
export default App;
