import {ApolloServer, ApolloServerPlugin, BaseContext, ContextFunction} from '@apollo/server';
import {ExpressContextFunctionArgument, expressMiddleware} from '@as-integrations/express5';
import {Logger} from '@coolcolduk/enum';
import cors, {CorsOptions} from 'cors';
import express, {Handler} from 'express';
import {GraphQLDirective, GraphQLFormattedError} from 'graphql';
import {buildSchema, NonEmptyArray} from 'type-graphql';

type BuildSchemaOptions = Parameters<typeof buildSchema>[0];
type AuthChecker = NonNullable<BuildSchemaOptions['authChecker']>;
type ValidateSettings = BuildSchemaOptions['validate'];

export interface CreateApolloServerOptions<TContext extends BaseContext> {
  cors?: CorsOptions;
  authChecker?: AuthChecker;
  directives?: GraphQLDirective[];
  // errorHandler?: ErrorRequestHandler;
  middleware?: Handler[];
  orphanedTypes?: Function[];
  validate?: ValidateSettings;
  logger?: Logger;
  formatError?: (formattedError: GraphQLFormattedError, error: unknown) => GraphQLFormattedError;
  plugins?: ApolloServerPlugin<TContext>[];
  context?: ContextFunction<[ExpressContextFunctionArgument], TContext>;
}

export async function createApolloServer<TContext extends BaseContext>(
  resolvers: NonEmptyArray<Function>,
  options: CreateApolloServerOptions<TContext> = {},
) {
  const {
    cors: corsOptions,
    authChecker,
    orphanedTypes,
    directives,
    middleware,
    logger,
    formatError,
    plugins,
    context,
    validate,
  } = options;
  const app = express();

  // Build a GraphQL schema using TypeGraphQL
  const schema = await buildSchema({
    resolvers,
    authChecker,
    directives,
    orphanedTypes,
    validate,
  });

  // Initialize Apollo Server with the schema
  const server = new ApolloServer<TContext>({
    schema,
    logger,
    formatError,
    plugins,
  });

  await server.start();

  if (middleware) app.use(middleware);

  const middlewareHandler = context
    ? expressMiddleware(server as unknown as ApolloServer<BaseContext>, {
        context: context as unknown as ContextFunction<[ExpressContextFunctionArgument], BaseContext>,
      })
    : expressMiddleware(server as unknown as ApolloServer<BaseContext>);

  app.use('/', cors(corsOptions), middlewareHandler as unknown as express.Handler);

  return app;
}
