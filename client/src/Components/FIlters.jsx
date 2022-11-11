import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  //filterByPrice,
  orderByPrice,
  getProducts,
  orderByName,
  filterByGender,
  filterBySize,
} from "../Redux/Actions/UsersActions";

export default function Filters() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  const allBrands = useSelector((state) => state.brands);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  /*   function handleFilterPrice(e) {
    e.preventDefault();
    dispatch(filterByPrice(e.targe.value));
  } */

  function handleSortName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
  }

  function handleSortPrice(e) {
    e.preventDefault();
    dispatch(orderByPrice(e.target.value));
  }

  function handleFilterGender(e) {
    e.preventDefault();
    dispatch(filterByGender(e.target.value));
  }

  function handleFilterSize(e) {
    e.preventDefault();
    dispatch(filterBySize(e.target.value));
  }

  return (
    <div className="filters-container">
      <div>
        <select>
          <option value="all">ALL CATEGORIES</option>
          <option value="jackets">JACKETS</option>
          <option value="shoes">SHOES</option>
          <option value="pants">PANTS</option>
          <option value="t-shirts">T-SHIRTS</option>
        </select>
      </div>

      <div>
        <select /* onChange={(e) => handleFilterPrice(e)} */>
          <option value="all">ALL PRICES</option>
          <option value="<50"> less than 50 </option>
          <option value="50 - 100"> 50 - 100 </option>
          <option value=">100"> more than 100 </option>
        </select>
      </div>

      <div>
        <select onChange={(e) => handleFilterGender(e)}>
          <option value="all">ALL GENDERS</option>
          <option value="male">MALE</option>
          <option value="female">FEMALE</option>
        </select>
      </div>

      <div>
        <select onChange={(e) => handleFilterSize(e)}>
          <option value="all">ALL SIZES</option>
          <option value="sizeXS">XS</option>
          <option value="sizeS">S</option>
          <option value="sizeM">M</option>
          <option value="sizeL">L</option>
          <option value="sizeXL">XL</option>
        </select>
      </div>

      <div>
        <select onChange={(e) => handleSortName(e)}>
          <option value="all">ORDER BY PRODUCT NAME</option>
          <option value="asc">A - Z</option>
          <option value="des">Z - A</option>
        </select>
      </div>

      <div>
        <select onChange={(e) => handleSortPrice(e)}>
          <option value="all">ORDER BY PRICES</option>
          <option value="asc">LOWER PRICE</option>
          <option value="des">HIGHER PRICE</option>
        </select>
      </div>
    </div>
  );
}
