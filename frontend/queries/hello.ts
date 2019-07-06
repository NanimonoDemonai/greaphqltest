import gql from "graphql-tag";

export const getHello = gql`
  query getHello {
    sayHello
  }
`;

export const getHelloKani = gql`
    query getHelloKani  {
        sayHello
        sayKani
    }
`;

