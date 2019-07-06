import { observable } from "mobx";
import { GetHelloQuery, GetKaniQuery } from "../queries/types";
import { getKani } from "../queries/kani";
import { Client } from "../lib/client";
import { getHello } from "../queries/hello";

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
    const res = await Client.client.query<GetKaniQuery>({
      query: getKani
    });

    this.text = res.data.sayKani;
  }

  async fetchHello() {
    const res = await Client.client.query<GetHelloQuery>({
      query: getHello
    });
    this.text = res.data.sayHello;
  }
}
