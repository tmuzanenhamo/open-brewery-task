import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const BreweryTable = ({ breweries }) => {
  const navigate = useNavigate();
  const handleViewClick = (name) => {
    navigate(`/breweries/${name}`);
  };
  return (
    <table className="brewery-table">
      <thead>
        <tr>
          <th className="brewery-table__header">Name</th>
          <th className="brewery-table__header">Brewery Type</th>
          <th className="brewery-table__header">Phone</th>
          <th className="brewery-table__header">Location</th>
          <th className="brewery-table__header">Actions</th>
        </tr>
      </thead>
      <tbody>
        {breweries.map((brewery) => (
          <tr key={brewery.id} className="brewery-table__row">
            <td className="brewery-table__cell">{brewery.name}</td>
            <td className="brewery-table__cell">{brewery.brewery_type}</td>
            <td className="brewery-table__cell">{brewery.phone}</td>
            <td className="brewery-table__cell">{`${brewery.address.city}, ${brewery.address.country}`}</td>
            <td className="brewery-table__cell">
              <button
                className="button button--seconday"
                onClick={() => handleViewClick(brewery.name)}
              >
                View
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

BreweryTable.propTypes = {
  breweries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      brewery_type: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      address: PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default BreweryTable;
