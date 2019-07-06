import { observable } from "mobx";
import * as QueryType from "../queries/types";
import { Client } from "../lib/client";
import { getHello } from "../queries/hello";
import * as kaniQuery from "../queries/kani";

export interface PageModel {
  text: string;
}

export class PageController implements PageModel {
  @observable text: string = "";
  constructor(model: PageModel = { text: "" }) {
    this.initialize(model);
  }

  initialize(model: PageModel) {
    this.text = model.text;
  }

  async fetchKani() {
    const res = await Client.client.query<QueryType.GetKaniQuery>({
      query: kaniQuery.getKani
    });

    this.text = res.data.getKani.name;
  }

  async fetchKaniSay() {
    const res = await Client.client.query<QueryType.GetKaniSayQuery>({
      query: kaniQuery.getKaniSay
    });
    this.text = res.data.sayKani;
  }
  async fetchHello() {
    const res = await Client.client.query<QueryType.GetHelloQuery>({
      query: getHello
    });
    this.text = res.data.sayHello;
  }
}
