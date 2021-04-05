import { Expose, plainToClass } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, Timestamp, OneToMany, JoinColumn } from 'typeorm';
import { UserToRole } from './user-role.entity';

@Entity( {
    'name': 'roles',
} )

export class Role {
    @Expose()
    @PrimaryGeneratedColumn( 'increment' )
    id: number

    @Expose()
    @Column()
    name: string

    @Expose()
    @Column( { name: 'display_name', nullable: true } )
    displayName: string

    @OneToMany( () => UserToRole, userToRole => userToRole.role )
    userToRoles!: UserToRole;
}