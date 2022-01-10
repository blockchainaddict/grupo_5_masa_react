import React from "react";
import PropTypes from "prop-types";

function ContentRowCategories(props) {
  let listadoDeCategorias;

  if (props.categories !== null) {
    listadoDeCategorias = (
      <div className="card-body">
        {props.categories.map((category, i) => (
          <div className="row" key={category + i}>
            <div className="col-lg-12 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">
                  {category[0]} - {category[1]} en stock
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    listadoDeCategorias = "";
  }

  return (
    <div className="col-lg-12 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Tipos de Instrumentos musicales
          </h5>
        </div>
        {listadoDeCategorias}
      </div>
    </div>
  );
}

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

ContentRowCategories.defaultProps = {
  categories: "N/A",
};

/* PROPTYPES */

ContentRowCategories.propTypes = {
  atritutes: PropTypes.shape({
    categories: PropTypes.string.isRequired,
  }),
};

export default ContentRowCategories;
