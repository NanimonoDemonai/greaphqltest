import ApolloClient from "apollo-boost";
import "isomorphic-fetch";

export class Client {
  static readonly uri = "http://localhost:4000";

  //サーバーなら呼んでも問題ないクライアント
  private static serverCLient = new ApolloClient({
    uri: Client.uri
  });

  //クライアントで呼ばれる日には絶対安心なクライアント？
  private static clientClient: ApolloClient<any> | null;

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
