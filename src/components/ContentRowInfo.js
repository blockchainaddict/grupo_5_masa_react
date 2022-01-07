import React, { useState, useEffect } from "react";
import SmallCard from "./SmallCard";

function ContentRowInfo() {
  const [products, setProducts] = useState(0);
  const [users, setUsers] = useState(0);

  /*  Cada set de datos es un objeto literal */

  /* <!-- Users in DB --> */

  let usersInDB = {
    title: "Total de usuarios",
    color: "primary",
    cuantity: users.total,
    icon: "fa-user-check",
  };

  /* <!-- Products in DB --> */

  let productsInDB = {
    title: "Total de productos",
    color: "warning",
    cuantity: products.total,
    icon: "fa-clipboard-list",
  };

  /* <!-- Categories in DB --> */

  let totalCategories = {
    title: "Total de categorías",
    color: "success",
    cuantity: products.countByCategory,
    icon: "fa-award",
  };

  /* <!-- Actors quantity --> */

  let cartProps = [usersInDB, productsInDB, totalCategories];

  useEffect(() => {
    fetch("/api/products/")
      .then((response) => response.json())
      .then((data) => {
        if (data.data !== undefined ){
          setProducts(data.meta);
        } else {
          setProducts([]);
        }
      })
      .catch((error) => console.log(error));

    fetch("/api/users/")
      .then((response) => response.json())
      .then((data) => {
        if (data.data !== undefined ){
            setUsers(data.meta);
          } else {
            setUsers([]);
          }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="row">
      {cartProps.map((data, i) => {
        return <SmallCard {...data} key={i} />;
      })}
    </div>
  );
}

export default ContentRowInfo;
