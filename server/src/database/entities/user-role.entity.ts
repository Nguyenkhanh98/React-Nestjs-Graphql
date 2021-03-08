import { User } from './user.entity';
import { Role } from './role.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class UserToRole {
    @PrimaryGeneratedColumn()
    id: number;

    @Column( { name: 'user_id' } )
    userId: number

    @Column( { name: 'role_id' } )
    roleId: number

    @ManyToOne( () => User, user => user.userToRoles, { nullable: false } )
    @JoinColumn( { name: 'user_id' } )
    user!: User;

    @ManyToOne( () => Role, role => role.userToRoles, { nullable: false } )
    @JoinColumn( { name: 'role_id' } )
    role!: Role;
}