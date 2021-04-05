import { Expose, plainToClass } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, Timestamp, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Provider } from '../enum';
// enum Provider {
//     Microsoft,
//     Google,
// }

@Entity( {
    'name': 'accounts',
} )


export class Account {
    @Expose()
    @PrimaryGeneratedColumn( 'increment' )
    id: number

    @Expose()
    @Column( { unique: true, nullable: false } )
    email: string

    @Expose()
    @Column( {
        nullable: true,
    } )
    token: string

    @Expose()
    @Column( {
        nullable: true
    } )
    name: string

    @Expose()
    @Column( 'text' )
    provider: Provider

    @Expose()
    @OneToOne( () => User, user => user.account, { nullable: false } )
    user: User
}