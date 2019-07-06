import { GraphQLServer } from "graphql-yoga";
import "reflect-metadata";
import { buildSchema, Query, Resolver } from "type-graphql";

@Resolver()
class RecipeResolver {
  @Query(() => String)
  sayHello() {
    return "やーほー";
  }

  @Query(() => String)
  sayKani() {
    return "カニ";
  }
}

const main = async () => {
  const schema = await buildSchema({
    resolvers: [RecipeResolver]
  });

  const server = new GraphQLServer({ schema });

  server.start(
      {
        cors: {
          credentials: true,
          origin: ["http://localhost:3000"]
        }
      },
      () => console.log("Server is running on localhost:4000")
  );
};

main();
