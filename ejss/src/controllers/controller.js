const Producto = []

const raizProducto = (req, res) => {
    res.render('main.ejs', { Producto })
}
const getProducto = (req, res) => {
    res.render('mostrar.ejs', { Producto })
}

const postProducto = (req, res) => {
    Producto.push(req.body)
    res.redirect('/producto')
}


module.exports = {
    getProducto,
    postProducto,
    raizProducto
}