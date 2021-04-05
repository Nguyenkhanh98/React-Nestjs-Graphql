const { Client } = require( 'pg' );

import { url } from 'inspector';
import config from '../../config.orm';
import * as users from './users.json';
import * as roles from './roles.json';
import * as userToRoles from './user-to-role.json';
import * as accounts from './accounts.json';
import { Account } from '../entities/account.entity';
import { plainToClass } from 'class-transformer';

async function main() {
    const client = new Client( { connectionString: config.url } );
    client.connect().then( async () => {
        console.log( 'connected' );


        // for ( const key in accounts ) {
        //     const account = accounts[key];
        //     if ( account.hasOwnProperty( 'id' ) ) {

        //         client.query(
        //             `INSERT into accounts (id, email, token, name, provider) VALUES ($1, $2, $3, $4, $5)`,
        //             [account.id, account.email, account.token || '', account.name, account.provider],
        //             ( err, result ) => {
        //                 if ( err ) {
        //                     console.log( err );
        //                 } else {
        //                     console.log( `row inserted with data`, account )
        //                 }
        //             }
        //         )
        //     }

        // }

        // for ( const key in roles ) {
        //     const role = roles[key];
        //     if ( role.hasOwnProperty( 'id' ) ) {
        //         client.query(
        //             `INSERT into roles (id, name, display_name) VALUES ($1, $2, $3)`,
        //             [role.id, role.name, role.display_name],
        //             ( err, result ) => {
        //                 if ( err ) {
        //                     console.log( err );
        //                 } else {
        //                     console.log( `row inserted with data`, role )
        //                 }
        //             }
        //         )
        //     }

        // }

        // await new Promise( async ( resolve, reject ) => {
        //     let i = 0;
        //     for ( const key in users ) {
        //         const user = users[key];
        //         if ( user.hasOwnProperty( 'id' ) ) {
        //             client.query(
        //                 `INSERT into users (id, first_name, last_name, avatar, gender, updated_at, microsoft_id) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        //                 [user.id, user.first_name, user.last_name, user.avatar, user.gender, user.updated_at, user.microsoft_id],
        //                 ( err, result ) => {
        //                     if ( err ) {
        //                         console.log( err );
        //                     } else {
        //                         i++;
        //                         console.log( `row inserted with data`, user )
        //                     }
        //                 }
        //             )
        //         }

        //     }
        //     if ( i === users.length ) {
        //         resolve();
        //     }
        // } )

        // await new Promise( async ( resolve, reject ) => {
        //     let i = 0;
        //     for ( const key in userToRoles ) {
        //         const userToRole = userToRoles[key];
        //         if ( userToRole.hasOwnProperty( 'id' ) ) {
        //             client.query(
        //                 `INSERT into user_to_role (id, role_id, user_id) VALUES ($1, $2, $3)`,
        //                 [userToRole.id, userToRole.role_id, userToRole.user_id],
        //                 ( err, result ) => {
        //                     if ( err ) {
        //                         console.log( err );
        //                     } else {
        //                         i++;
        //                         const userToRole = userToRoles[key];
        //                         console.log( `row inserted with data`, userToRole )
        //                     }
        //                 }
        //             )
        //         }

        //     }
        //     if ( i === userToRoles.length ) {
        //         resolve();
        //     }
        // } )


        // INsert value acccount_id in user table
        // await new Promise( async ( resolve, reject ) => {
        //     let i = 0;
        //     for ( const key in users ) {
        //         const user = users[key];
        //         if ( user.hasOwnProperty( 'id' ) ) {
        //             i++;
        //             console.log( i );
        //             await client.query(
        //                 `UPDATE users SET account_id = ${i} WHERE id = ${i}`,

        //                 ( err, result ) => {
        //                     if ( err ) {
        //                         console.log( err );
        //                     } else {

        //                         console.log( `row update with data`, user )
        //                     }
        //                 }
        //             )
        //         }
        //         if ( i === users.length ) {
        //             console.log( i );
        //             resolve();
        //         }
        //     }

        // } )

    } ).catch( ( err ) => {
        console.log( err );
    } )
}
main()