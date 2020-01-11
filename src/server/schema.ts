import { buildASTSchema, parse, DocumentNode, GraphQLSchema } from "graphql";
import { addResolveFunctionsToSchema } from "graphql-tools";
import {typeDefs} from "./typeDefs";

const ast: DocumentNode = parse(typeDefs);
const schema: GraphQLSchema = buildASTSchema(ast);
addResolveFunctionsToSchema({
    schema,
    resolvers
});