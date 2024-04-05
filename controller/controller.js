const postStock = (req, res) =>{
    res.json({
        success: true,
        message: "data added  to stock",
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