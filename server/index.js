require ('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      cors = require('cors'),
      ctrl = require('./controller'),
      {SERVER_PORT, CONNECTION_STRING} = process.env,
      app = express();

app.use(cors());
app.use(express.json());
const port = SERVER_PORT;

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('db connected');
    app.listen(port, () => console.log(`Server listening on port ${port}.`));
})
.catch(err => console.log(err));

// ENDPOINTS 
// READ
app.get('/api/products', ctrl.getProduct);
// CREATE
app.post('/api/products', ctrl.createProduct);
// EDIT/UPDATE
app.put('/api/products/:id', ctrl.updateProduct);
// DELETE
app.delete('/api/products/:id', ctrl.deleteProduct);

