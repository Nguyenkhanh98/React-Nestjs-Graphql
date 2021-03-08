import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmSerivce, GraphQLService } from './config';
import * as Resolvers from './resolvers';
import { DateScalar } from './config/graphql/scalars';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module( {
  imports: [TypeOrmModule.forRootAsync( {
    useClass: TypeOrmSerivce
  } ),
  GraphQLModule.forRootAsync( {
    useClass: GraphQLService
  } ),
  ServeStaticModule.forRoot( {
    rootPath: join( __dirname, '..', 'client' )
  } )
  ],
  controllers: [AppController],
  providers: [AppService, ...Object.values( Resolvers ), DateScalar],
} )

export class AppModule { }
