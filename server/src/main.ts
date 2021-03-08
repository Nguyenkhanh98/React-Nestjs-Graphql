import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { getConnection } from 'typeorm'
import { MyLogger } from './config/logger';
import helmet from 'helmet';
import compression from 'compression';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware'
import rateLimit from 'express-rate-limit';
import { LoggerMiddleware } from './common';
import { VOYAGER, NODE_ENV, END_POINT, RATE_LIMIT_MAX } from './config/environments';
config();

async function bootstrap() {
  const app = await NestFactory.create( AppModule, {
    logger: new MyLogger()
  } )

  const connection = getConnection( 'default' );

  const { isConnected } = connection;

  isConnected
    ? Logger.log( `  Database connected`, 'TypeORM', false )
    : Logger.error( ` Database connect error`, '', 'TypeORM', false )

  app.use( compression() );

  app.use( helmet( { contentSecurityPolicy: ( process.env.NODE_ENV === 'production' ) ? undefined : false } ) );

  app.use( LoggerMiddleware );

  app.use( rateLimit( {
    windowMs: 1000 * 60 * 60, // an hour
    max: RATE_LIMIT_MAX, // limit each IP to 100 requests per windowMs
    message: ' Too many request created from this IP, please try again after an hour'
  } ) );
  Logger.log( ` rateLimit max 100, 1 minute` );

  NODE_ENV !== 'production' &&
    app.use(
      `/${VOYAGER}`,
      voyagerMiddleware( {
        displayOptions: {
          skipRelay: false,
          skipDeprecated: false
        },
        endpointUrl: `/${END_POINT}`
      } )
    )


  await app.listen( parseInt( process.env.PORT ) || 8080 );
}
bootstrap();
