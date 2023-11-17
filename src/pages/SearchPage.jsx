import React, { useState } from 'react';
import ZipcodeForm from './ZipcodeForm';
import LocationPage from './LocationPage';

const SearchPage = () => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [responseCode, setResponseCode] = useState(null);

  const fetchLocationInfo = async (postalCode) => {
    setLocations([]);
    setResponseCode(null);
    setIsLoading(true);

    try {
      const response = await fetch(`https://api.zippopotam.us/IN/${postalCode}`);
      const data = await response.json();

      setResponseCode(response.status);

      if (response.ok) {
        setLocations([data]);
      }
    } catch (err) {
      setResponseCode(500);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setLocations([]);
    setResponseCode(null);
  };

  return (
    <>
      <ZipcodeForm onFormSubmit={fetchLocationInfo} />
      <LocationPage
        locations={locations}
        isLoading={isLoading}
        responseCode={responseCode}
        onClear={handleClear}
      />
    </>
  );
};

export default SearchPage;
