import { Hero } from '@/components';

import {
  AmazonFba,
  DirectClient,
  MarketProcess,
  GetStarted,
  Marketplace,
  OperationalProcess,
  Options,
  ShipServices,
  WhatWeCanDo,
} from '@/section';

export default function Ecommerce() {
  return (
    <>
      <Hero image='bg-ecommerce-hero'>E-commerce 3PL</Hero>
      <WhatWeCanDo />
      <DirectClient />
      <Options />
      <OperationalProcess />
      <Marketplace />
      <AmazonFba />
      <ShipServices />
      <MarketProcess />
      <GetStarted image='bg-ecommerce-banner' />
    </>
  );
}
