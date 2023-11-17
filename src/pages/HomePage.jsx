import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  height: 100vh;
  width: 70%;
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
  opacity: ${({ disappearing }) => (disappearing ? 0 : 1)};
  transform: ${({ disappearing }) => (disappearing ? 'translateX(-100%)' : 'translateX(0)')};
`;

const GetStartedButton = styled.button`
  padding: 10px 20px;
  font-size: 24px;
  background-color: rgba(255, 255, 255, 0.5);
  color: #fff;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
    text-decoration: none;
  }
`;

const Heading = styled.h1`
  color: white;
  font-family: 'Courier New', monospace;
  margin-top: 20px;
  font-size: 60px;
  font-weight: bolder;
`;

const Info = styled.p`
  font-size: 22px;
  color: white;
`;

const HomePage = () => {
  const [disappearing, setDisappearing] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setDisappearing(true);
    setTimeout(() => {
      navigate('/search');
    }, 1000); // Adjust the timeout based on your transition duration
  };

  return (
    <HomePageContainer disappearing={disappearing}>
      <Heading>The Postal Code Search App</Heading>
      <Info>
        Checkout the latest website to search the information at just a click away! Checkout our new system where you can
        just type the postal code and get the information of your location in just seconds.
      </Info>
      <GetStartedButton onClick={() => handleGetStarted(true)}>Get Started</GetStartedButton>
    </HomePageContainer>
  );
};

export default HomePage;
