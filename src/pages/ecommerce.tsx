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
import { NextSeo } from 'next-seo';

export default function EcommercePage() {
  return (
    <>
      <NextSeo title='E-commerce 3PL | Front Dock' />
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
