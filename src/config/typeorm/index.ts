import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { getMetadataArgsStorage } from 'typeorm';
import { TYPEORM } from '../environments';

@Injectable()

export class TypeOrmSerivce implements TypeOrmOptionsFactory {
    public async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
        return {
            ...TYPEORM,
            type: 'postgres',
            // entities: getMetadataArgsStorage().tables.map( tbl => tbl.target ),
            entities: ["src/database/entities/*.entity.ts"],

            // entities: [join( __dirname, '**', '*.entity.{ts.js}' )],
            synchronize: true,
            migrations: ['src/database/migrations/*.ts'],
            cli: {
                migrationsDir: "src/database/migrations"
            },
            autoLoadEntities: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            keepConnectionAlive: true,
            logging: true
        }
    }
}