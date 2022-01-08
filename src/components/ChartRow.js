import React from 'react';
import PropTypes from 'prop-types';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.model}</td>
                    <td>{props.description}</td>
                    {/* <td>
                        <ul>
                            {props.Categories.map( (category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                            )}
                        </ul>
                    </td>
                    <td>{props.Awards}</td> */}
                </tr>
            )
    }

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

ChartRow.defaultProps = {
    id: 'N/A',
    model: 'N/A',
    description: 'N/A',
}

/* PROPTYPES */

ChartRow.propTypes = {
    atritutes: PropTypes.shape({
        id: PropTypes.number.isRequired, 
        model: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        description: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
    })
}

        

export default ChartRow;