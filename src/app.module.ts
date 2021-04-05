import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { vwGlPaymentService, ameliaReportUserService } from './services';
import { TypeOrmSerivce, GraphQLService } from './config';
import * as Resolvers from './resolvers';
import { DateScalar } from './config/graphql/scalars';
import { ServeStaticModule } from '@nestjs/serve-static';
import { HttpConfigService } from './config/httpModule';
import { vwGlPaymentModule } from './services/vwGlPayment/vwGlPayment.module';
import { join } from 'path';

@Module( {
  imports: [TypeOrmModule.forRootAsync( {
    useClass: TypeOrmSerivce
  } ),
  GraphQLModule.forRootAsync( {
    useClass: GraphQLService
  } ),
  HttpModule.registerAsync( {
    useClass: HttpConfigService
  } ),
  ServeStaticModule.forRoot( {
    rootPath: join( __dirname, '..', 'client', 'dist' ),
    exclude: ['/api*', '/graphql*'],
  } )
  ],
  controllers: [AppController],
  providers: [AppService, vwGlPaymentService, ameliaReportUserService, ...Object.values( Resolvers ), DateScalar],
} )

export class AppModule { }
