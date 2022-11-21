/* eslint-disable max-len */
import React from 'react';
import { useParams } from 'react-router-dom';

import consumerCyclical from '../components/images/consumer-svgrepo-com.svg';
import energy from '../components/images/energy-svgrepo-com.svg';
import technology from '../components/images/Technology.svg';
import industrial from '../components/images/industry-svgrepo-com.svg';
import financialServices from '../components/images/financial-services.svg';
import basicMaterials from '../components/images/basic-home-svgrepo-com.svg';
import communicationServices from '../components/images/communication-svgrepo-com.svg';
import consumerDefence from '../components/images/consumer-defence.svg';
import healthCare from '../components/images/healthcare-svgrepo-com.svg';
import realEstate from '../components/images/real-estate-svgrepo-com.svg';
import utilities from '../components/images/Utilities.svg';
import industrialGoods from '../components/images/Industrial_Goods.svg';
import financial from '../components/images/Financial.svg';
import services from '../components/images/Services.svg';
import conglomerates from '../components/images/Conglomerates.svg';

const ListFilteredStocks = () => {
  const { id } = useParams();
  const typeSpecified = {
    'Consumer Cyclical': consumerCyclical,
    Energy: energy,
    Technology: technology,
    Industrials: industrial,
    'Financial Services': financialServices,
    'Basic Materials': basicMaterials,
    'Communication Services': communicationServices,
    'Consumer Defensive': consumerDefence,
    Healthcare: healthCare,
    'Real Estate': realEstate,
    Utilities: utilities,
    'Industrial Goods': industrialGoods,
    Financial: financial,
    Services: services,
    Conglomerates: conglomerates,
  };
  return (
    <>
      <div className="type__container">
        <img src={typeSpecified[id]} alt="" />
        <h3>
          {id}
          {' '}
          in Stock Exchange
          {' '}
        </h3>
      </div>
      {id}
    </>
  );
};

export default ListFilteredStocks;
