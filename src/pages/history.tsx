import React, { SFC } from 'react';
import { Link, graphql } from 'gatsby';

import { Layout, SEO, BeerTable } from '../components';
import { Beer, StockProps } from '../types';

const History: SFC<StockProps> = ({
  data: {
    allGoogleSheetInventoryRow: { nodes },
  },
}) => (
  <Layout>
    <SEO title="History" />
    <BeerTable title="History" beers={nodes} />
  </Layout>
);

export const query = graphql`
  query {
    allGoogleSheetInventoryRow {
      nodes {
        name
        brewery
        year
        abv
        style
        size
        stock
        collaborator
        barrelAged
        barrelType
        brewedWith
      }
    }
  }
`;

export default History;
