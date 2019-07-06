import { Query, Resolver } from "type-graphql";
import { Crab } from "../types/Crab";
import uuid from "uuid";

@Resolver(Crab)
export class CrabResolver {
  private readonly kani: Crab[] = [
    new Crab({
      id: uuid.v4(),
      name: "カニ太郎",
      price: 50000,
      description: "つよいカニ",
      lostLegs: []
    }),
    new Crab({
      id: uuid.v4(),
      name: "カニ次郎",
      price: 55000,
      description: "よりつよいカニ",
      lostLegs: ["左後ろ脚"]
    })
  ];

  @Query(() => Crab, { description: "かにの長男を呼ぶ" })
  async getKani() {
    return this.kani[0];
  }

  @Query(() => [Crab], { description: "かにの一族を呼ぶ" })
  async getKanis() {
    return this.kani;
  }
}
