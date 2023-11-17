
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const StyledForm = styled.form`
  margin-top: 20px;
  text-align: center;
`;

const Heading = styled.h2`
  color: white;
  font-family: 'Courier New', monospace;
  font-size: 24px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  border: none;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.9);
  transition: background-color 0.3s, transform 0.3s;
  margin-right: 10px;

  &:focus {
    background-color: rgba(255, 255, 255, 0.8);
    transform: scale(1.02);
    border: none;
  }
`;

const Submit = styled.button`
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border-radius: 25px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ZipcodeForm = ({ onFormSubmit }) => {
  const [postalCode, setPostalCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(postalCode);
  };

  return (
    <StyledFormContainer>
      <Heading>Type the postal code here:</Heading>
      <StyledForm onSubmit={handleSubmit}>
        <SearchContainer>
          <SearchInput
            type="text"
            id="postalCode"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <Submit type="submit">
            <i className="fas fa-search"></i> Submit
          </Submit>
        </SearchContainer>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default ZipcodeForm;
