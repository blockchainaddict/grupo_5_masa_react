import React, { useState, useEffect } from "react";
import ContentRowLastProduct from "./ContentRowLastProduct";

function ContentRowCenter() {
  const [products, setProducts] = useState([0]);

  let lastProductArray = [];

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

  //  Funcion para traer el último
  lastProductArray = products[products.length - 1];

  return (
    <React.Fragment>
      {/*<!-- Last Movie in DB -->*/}
      <ContentRowLastProduct lastProduct={lastProductArray} />
      {/*<!-- End content row last movie in Data Base -->*/}
    </React.Fragment>
  );
}

export default ContentRowCenter;
