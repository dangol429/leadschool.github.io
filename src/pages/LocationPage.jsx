import React, { useState, useEffect } from 'react';
import { RiseLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { MdErrorOutline } from "react-icons/md";

const StyledLocationBox = styled.div`
  background-color: rgba(28, 28, 28, 0.5);
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  margin-top: 20px;
  backdrop-filter: blur(5px);
`;

const LocationInfo = styled.div`
  margin-top: 20px;
`;

const PlaceBox = styled.div`
  border: 1px solid #fff;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
`;

const StyledButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Notfound = styled.p`
  font-size: 30px;
  text-align: center;
  margin: 20px;
`;

const LocationPage = ({ locations, isLoading, onClear, responseCode }) => {
  const [showToast, setShowToast] = useState(false);
  const [showNotFound, setShowNotFound] = useState(false);

  useEffect(() => {
    if (locations && locations.length > 0 && !showToast) {
      setShowToast(true);
      toast.success('Place Found!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  }, [locations, showToast]);

  useEffect(() => {
    if (responseCode === 404 || responseCode === 500) {
      setShowNotFound(true);
    } else {
      setShowNotFound(false);
    }
  }, [responseCode, locations, showToast]);
  

  useEffect(() => {
    setShowToast(false);
  }, [locations]);

  if (isLoading) {
    return (
      <div style={{ position: 'relative', justifycontent: 'center', textAlign:'center', top: '2rem', left: 0, right: 0}}>
    <RiseLoader color={'#3498db'} loading={true} size={15} />
  </div>
    );
  }

  if (showNotFound) {
    return <Notfound style={{ color: 'white' }}><p><MdErrorOutline />
    </p>Location not found.</Notfound>;
  }

  if (!locations || locations.length === 0) {
    return null; 
  }

  return (
    <>
     <ToastContainer />
    <StyledLocationBox>
      <h2>Location Information</h2>
      <LocationInfo>
        {locations.map((location, index) => (
          <div key={index} className="location-info">
            {location.places.map((place, placeIndex) => (
              <PlaceBox key={placeIndex} className="place-info">
                <p>
                  <strong>Country:</strong> {location.country}
                </p>
                <p>
                  <strong>Place Name:</strong> {place['place name']}
                </p>
                <p>
                  <strong>State:</strong> {place.state}
                </p>
              </PlaceBox>
            ))}
          </div>
        ))}
      </LocationInfo>
      <StyledButton onClick={onClear}>Clear</StyledButton>
    </StyledLocationBox>
    </> 
  );
};

export default LocationPage;
