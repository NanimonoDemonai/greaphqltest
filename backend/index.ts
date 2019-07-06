import "reflect-metadata";
import { GraphQLServer } from "graphql-yoga";
import { buildSchema } from "type-graphql";
import { CrabResolver } from "./resolvers/CrabResolver";
import { AisatsuResolver } from "./resolvers/AisatsuResolver";
import path from "path";

const main = async () => {
  const schema = await buildSchema({
    resolvers: [AisatsuResolver, CrabResolver],
    emitSchemaFile: path.resolve(__dirname, "../schema.graphql")
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
