import React from 'react';
import { FeatureContainer, FeatureButton } from './Feature1';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Food of the day</h1>
      <p> pan gravy </p>
      <FeatureButton>check out</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;