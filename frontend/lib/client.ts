import ApolloClient from "apollo-boost";
import "isomorphic-fetch";

export class Client {
  static readonly uri = "http://localhost:4000";
  private static serverCLient = new ApolloClient({
    uri: Client.uri
  });
  private static clientClient: ApolloClient<any>;

  public static get client(): ApolloClient<any> {
    if (!process.browser) {
      return this.serverCLient;
    }
    if (!this.clientClient) {
      this.clientClient = new ApolloClient({ uri: Client.uri });
    }
    return this.clientClient;
  }
}
