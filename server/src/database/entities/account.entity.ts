import { Expose, plainToClass } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, Timestamp, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

enum Provider {
    Microsoft,
    Google,
}

@Entity( {
    'name': 'accounts',
} )


export class Account {
    @Expose()
    @PrimaryGeneratedColumn()
    id: number

    @Expose()
    @Column()
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
    @ManyToOne( () => User, user => user.accounts, { nullable: false } )
    @JoinColumn( { name: 'user_id' } )
    user!: User
}