import React, { Fragment, useEffect, useState } from "react";
import BreweryTable from "../components/BreweryTable/BreweryTable";
import axios from "axios";
import Loader from "../components/Loader/Loader";

const Results = () => {
  const [breweries, setBreweries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;

  async function fetchBreweries(page, per_page) {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8000/api/breweries", {
        params: { page, per_page },
      });
      setBreweries(response.data);
    } catch (error) {
      console.error("Error fetching breweries:", error);
      // Handle error
      throw error;
    }
    setLoading(false);
  }

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    fetchBreweries(currentPage, perPage);
  }, [currentPage]);

  const handleNext = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  const onSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8000/api/breweries/${searchTerm}`
      );
      setBreweries(response.data);
    } catch (error) {
      console.error("Error searching breweries:", error);
    }
    setLoading(false);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Fragment>
      <div className="results">
        <div className="results__container">
          <h3 className="results__title">Open Brewery</h3>

          <div className="results__search-container">
            <input
              value={searchTerm}
              type="text"
              className="search-input"
              onChange={handleInputChange}
            />
            <button className="button button--primary" onClick={onSearch}>
              Search
            </button>
          </div>

          {!breweries?.length ? (
            <div className="no-data">
              <div className="no-data__content">
                <h3 className="no-data__title">No Data Available</h3>
                <p className="no-data__message">
                  There are no results to display.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="results__table-wrapper">
                <BreweryTable breweries={breweries} />
              </div>

              <div className="results__pagination">
                <button
                  className="button button--secondary"
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <button
                  className="button button--secondary"
                  onClick={handleNext}
                  disabled={breweries.length < perPage}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Results;
