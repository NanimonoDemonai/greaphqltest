import gql from "graphql-tag";

export const getKani = gql`
  query getKani {
    sayKani
  }
`;
