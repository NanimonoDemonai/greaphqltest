import { Query, Resolver } from "type-graphql";

@Resolver()
export class AisatsuResolver {
  @Query(() => String, { description: "あいさつは大事" })
  sayHello() {
    return "やーほー";
  }

  @Query(() => String, { description: "かにもあいさつする" })
  sayKani() {
    return "カニ";
  }
}
