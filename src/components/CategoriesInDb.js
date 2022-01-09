import React, { useState, useEffect } from "react";
import ContentRowCategories from "./ContentRowCategories";

function CategoriesInDb() {
  const [products, setProducts] = useState([]);

  let typeArray = [];
  let categoriesArray = [];

  useEffect(() => {
    fetch("/api/products/byCategories")
      .then((response) => response.json())
      .then((data) => {
        if (data.data !== undefined) {
          setProducts(data.data);
        } else {
          setProducts([]);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  products.map((product) => {
    if (product !== undefined) {
      return typeArray.push(product.type);
    } else return products;
  });

  categoriesArray = [...new Set(typeArray.map((category) => category.name))];

  console.log(categoriesArray);
  if (categoriesArray.length === 0) {
    categoriesArray = ['N/A'];
  }


  return (
    <div className="row">
      <ContentRowCategories categories={categoriesArray} />
    </div>
  );
}

export default CategoriesInDb;
