import OverallStat from "../models/OverallStat.js";

export const getSales = async (req, res) => {
  try {
    const overallStats = await OverallStat.find();

    res.status(200).json(overallStats[0]);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};


export const getProductDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const productStat = await ProductStat.findById(id);
    res.status(200).json(productStat);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};
