import gql from "graphql-tag";

export const getKaniSay = gql`
  query getKaniSay {
    sayKani
  }
`;

export const getKani = gql`
  query getKani {
    getKani {
      name
    }
  }
`;
