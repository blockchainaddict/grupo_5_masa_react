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

  // Array de objetos de las categorías
  products.map((product) => {
    if (product !== undefined) {
      return typeArray.push(product.type);
    } else return products;
  });

  // Busco los repetidos, los cuento y elimino los nombres iguales
  const busqueda = typeArray.reduce((acc, type) => {
    acc[type.name] = ++acc[type.name] || 1;
    return acc;
  }, {});

  // Convierto a array para pasarlo por props
  categoriesArray = Object.entries(busqueda);

  // Valor por default si falla la llamada a la api 
  if (categoriesArray.length === 0) {
    categoriesArray = ['0'];
  }

  return (
    <div className="row">
      <ContentRowCategories categories={categoriesArray} />
    </div>
  );
}

export default CategoriesInDb;
