module.exports = {
    getProduct: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_products().then((products) => {
            res.status(200).send(products)
        })
        .catch(err => res.status(500).send(err));
    },
    createProduct: (req, res) => {
        const {name, price, image} = req.body;
        const dbInstance = req.app.get('db');
        
        dbInstance.create_product([name, price, image]).then((product) => {
            res.status(200).send(product)
        })
        .catch(err => res.status(500).send(err));
    },
    
    deleteProduct: (req, res) => {
        const {id} = req.params;
        const dbInstance = req.app.get('db');
        
        dbInstance.delete_product(id).then((product) => {
            res.status(200).send(product)
        })
        .catch(err => res.status(500).send(err));
    },

    updateProduct: (req, res) => {
        const {id} = req.params;
        const {name, price, image} = req.query;
        const dbInstance = req.app.get('db');

        dbInstance.update_product([id, name, price, image]).then((product) => {
            res.status(200).send(product)
        })
        .catch(err => res.status(500).send(err));

    }
    
}