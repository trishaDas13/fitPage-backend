const stockModel = require("../model/model");

const postStock = async (req, res) => {
  try {
    const newStock = new stockModel(req.body);
    const insertStock = await newStock.save();
    return res.json({
      success: true,
      message: "data added to stock",
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: "Something went wrong!",
      error: error.message,
    });
  }
};

const getStock = async (req, res) => {
  try {
    const stockResult = await stockModel.find({});

    return res.json({
      success: true,
      message: "Data fetched Successfully.",
      result: stockResult,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: "Data could not be get error faced.",
      error: err.message,
    });
  }
};
module.exports = {
  postStock,
  getStock,
};
