const postStock = (req, res) =>{
    res.json({
        mes: "dummy post"
    })
}

const getStock = (req, res) =>{
    res.json({
        mes: "dummy get"
    })
}
module.exports = {
    postStock,
    getStock
}