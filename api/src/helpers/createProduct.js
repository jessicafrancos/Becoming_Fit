const { Product } = require("../db");

const createProductInDb = async (
  name,
  type,
  color,
  gender,
  size,
  rating,
  price,
  description,
  image
) => {
  try {
    let newProduct = await Product.create({
      name,
      type,
      color,
      gender,
      size,
      rating,
      price,
      description,
      image,
    });
    return newProduct.dataValues;
  } catch (error) {
    return error;
  }
};
module.exports = { createProductInDb };
