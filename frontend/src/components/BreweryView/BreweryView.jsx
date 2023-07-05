import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const BreweryView = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };
  const [brewery, setBrewery] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrewery = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/breweries/${params.name}`
        );
        setBrewery(response.data[0]);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching brewery:", error);
      }
    };

    fetchBrewery();
  }, [params]);

  if (loading) {
    return (<Loader />);
  }

  if (!brewery) {
    return (
      <div className="no-data">
        <div className="no-data__content">
          <h3 className="no-data__title">No Data Available</h3>
          <p className="no-data__message">There are no results to display.</p>
          <button className="button  button--primary" onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="brewery-view">
      <div className="brewery-view__wrapper">
        <div className="brewery-view__title">{brewery?.name}</div>
        <button className="button  button--primary" onClick={handleGoBack}>
          Go Back
        </button>
      </div>
      <div className="brewery-view__details">
        <div className="brewery-view__item">
          <strong className="brewery-view__label">Brewery Type:</strong>
          <span className="brewery-view__value">{brewery?.brewery_type}</span>
        </div>
        <div className="brewery-view__item">
          <strong className="brewery-view__label">Phone:</strong>
          <span className="brewery-view__value">{brewery?.phone}</span>
        </div>
        <div className="brewery-view__item">
          <strong className="brewery-view__label">Location:</strong>
          <span className="brewery-view__value">{`${brewery?.address?.city ? brewery?.address?.city : ''}, ${brewery?.address?.country ? brewery?.address?.country : ''}`}</span>
        </div>
        <div className="brewery-view__item">
          <strong className="brewery-view__label">Website:</strong>
          <a
            className="brewery-view__link"
            href={brewery?.website_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {brewery?.website_url}
          </a>
        </div>
        <div className="brewery-view__item">
          <strong className="brewery-view__label">Address:</strong>
          <span className="brewery-view__value">
            {brewery?.address?.address_1}
          </span>
        </div>
      </div>
    </div>
  );
};

BreweryView.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BreweryView;
