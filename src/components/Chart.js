import React, { useState, useEffect } from "react";
import ChartRow from "./ChartRow";

function Chart() {
  const [products, setProducts] = useState([0]);


//   let tableRowsData = [products];

  useEffect(() => {
    fetch("/api/products/")
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

  

  return (
    /* <!-- DataTales Example --> */
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>MODELO</th>
                <th>DESCRIPCION</th>
              </tr>
            </thead>
            <tbody>
              {products.map((row, i) => {
                return <ChartRow {...row} key={i} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Chart;
