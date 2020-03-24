import React, { SFC } from 'react';
import { graphql } from 'gatsby';

import { Layout, SEO, BeerTable } from '../components';
import { StockProps } from '../types';

const Stock: SFC<StockProps> = ({
  data: {
    allGoogleInventorySheet: { nodes },
  },
}) => (
  <Layout>
    <SEO title="Inventory" />
    <BeerTable title="Current Stock" beers={nodes} />
  </Layout>
);

export const query = graphql`
  query {
    allGoogleInventorySheet(filter: { stock: { ne: 0 } }) {
      nodes {
        name
        brewery
        year
        abv
        style
        size
        stock
        collaborators
        barrelAged
        barrelType
        brewedWith
      }
    }
  }
`;

export default Stock;
