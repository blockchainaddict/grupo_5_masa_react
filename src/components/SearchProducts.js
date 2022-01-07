import React, { useState, useEffect, useRef } from "react";

function SearchProducts() {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState([]);

  const inputTag = useRef();

  useEffect(() => {
    // Petición Asincrónica al montarse el componente
    // const endpoint = `http://localhost:3000/api/products/?s=${keyword}`;
    const endpoint = `/api/products/${keyword}`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.data !== undefined) {
          setProducts(data.data);
        } else {
          setProducts([]);
        }
      })
      .catch((error) => console.log(error));
    // }
  }, [keyword]);

  const searchProduct = async (e) => {
    e.preventDefault();
    const inputValue = inputTag.current.value;
    setKeyword(inputValue);
    inputTag.current.value = "";
  };

  return (
    <div className="container-fluid">
      {
        <>
          <div className="row my-4">
            <div className="col-12 col-md-6">
              {/* Buscador */}
              <form method="GET" onSubmit={searchProduct}>
                <div className="form-group">
                  <label htmlFor="">Buscar por producto:</label>
                  <input ref={inputTag} type="text" className="form-control" />
                </div>
                <button className="btn btn-info">Buscar</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2>Instrumentos {keyword}</h2>
            </div>
            {/* Listado de productos */}
            {products.length > 0 &&
              products.map((product, i) => {
                return (
                  <div className="col-sm-6 col-md-3 my-4" key={i}>
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                          {product.id}
                        </h5>
                      </div>
                      <div className="card-body">
                        <div className="text-center">
                          <p>{product.model}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {products.length === 0 && (
            <div className="alert alert-warning text-center">
              No se encontraron Instrumentos
            </div>
          )}
        </>
      }
    </div>
  );
}

export default SearchProducts;
