import { Resolver, Query } from '@nestjs/graphql';
import { Account } from '../database/entities/account.entity';
import { getRepository } from 'typeorm';

@Resolver( 'ACCOUNT' )
export class AccountResolvers {

    @Query( () => [Account] )
    async accounts(): Promise<Account[]> {
        const accounts = await getRepository( Account ).find();
        console.log( accounts );
        return accounts;
    }
}