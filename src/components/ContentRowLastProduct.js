import React from "react";
import PropTypes from "prop-types";

function ContentRowLastProduct(props) {
  let nameType = [];
  if (props.lastProduct.type !== undefined) {
    nameType = Object.values(props.lastProduct.type);
  }

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Nuevo Ingreso del mes
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 40 + "rem" }}
              src={`img/${props.lastProduct.image}`}
              alt={props.lastProduct.image}
            />
          </div>
          <p>
            <strong>Instrumento:</strong>{" "}
            {nameType[1] != undefined ? nameType[1] : "N/A"}
          </p>
          <p>
            <strong>Modelo:</strong> {props.lastProduct.model != undefined ? props.lastProduct.model : "N/A"}
          </p>
          <p>{props.lastProduct.description}</p>
          <a
            className="btn btn-danger"
            rel="nofollow"
            href="http://localhost:3000/products"
          >
            View movie detail
          </a>
        </div>
      </div>
    </div>
  );
}

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

ContentRowLastProduct.defaultProps = {
  id: "N/A",
  description: "N/A",
  image: "404.png",
  model: "N/A",
  nameType: "N/A",
};

/* PROPTYPES */

ContentRowLastProduct.propTypes = {
  atritutes: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    nameType: PropTypes.string.isRequired,
  }),
};

export default ContentRowLastProduct;
