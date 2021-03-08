import {
    Entity,
    ObjectID,
    Column,
    ObjectIdColumn,
    PrimaryGeneratedColumn,
    ManyToMany,
    Timestamp,
    Generated,
    OneToMany,
    JoinTable,
    OneToOne,
    JoinColumn
} from 'typeorm';
import { uuidv4 } from 'uuid';
import { ROLE } from '../../constant';
import { Exclude, Expose, plainToClass } from 'class-transformer';
import { Role } from './role.entity';
import { UserToRole } from './user-role.entity';
import { Account } from './account.entity';

@Entity( {
    name: 'users',
    orderBy: {
        createdAt: 'ASC'
    }
} )

export class User {
    @Expose()
    @PrimaryGeneratedColumn()
    id: number

    @Expose()
    @Generated( "uuid" )
    @Column()
    uuid: string


    @Expose()
    @Column( { name: 'first_name', nullable: true } )
    firstName: string

    @Expose()
    @Column( { name: 'last_name', nullable: true } )
    lastName: string

    @Expose()
    @Column( { nullable: true } )
    avatar: string

    @Expose()
    @Column( { name: 'reset_password_token', nullable: true } )
    resetPasswordToken: string

    @Expose()
    @Column( { name: 'reset_password_expires', nullable: true } )
    resetPasswordExpires: number

    @Expose()
    @Column( { nullable: true } )
    gender: string

    @Expose()
    @Column( { name: 'is_verified', default: false } )
    isVerified: boolean

    @Expose()
    @Column( { name: 'is_online', default: false } )
    isOnline: boolean

    @Expose()
    @Column( { name: 'is_lock', default: false } )
    isLocked: boolean

    @Expose()
    @Column( { nullable: true } )
    reason: string

    @Expose()
    @Column( { name: 'is_active', default: false } )
    isActive: boolean

    @Expose()
    @Column( 'timestamp with time zone', { name: 'created_at', default: 'now()' } )
    createdAt: Date

    @Expose()
    @Column( 'timestamp with time zone', { name: 'updated_at', default: 'now()' } )
    updatedAt: number

    @OneToMany( () => UserToRole, userToRole => userToRole.user )
    userToRoles!: UserToRole[];

    @OneToMany( () => Account, account => account.user )
    accounts: Account[];

    constructor( user: Partial<User> ) {
        if ( user ) {
            Object.assign(
                this,
                plainToClass( User, user, {
                    excludeExtraneousValues: true,
                } )
            );
            this.isVerified = this.isVerified !== null ? this.isVerified : this.accounts.length > 0 ? true : false;
            this.isOnline = this.isOnline !== null ? this.isOnline : false;
            this.isLocked = this.isLocked !== null ? this.isLocked : false;
            this.reason = this.reason || '';
            this.isActive = this.isActive !== null ? this.isActive : true;
            this.createdAt = this.createdAt || new Date()
            this.updatedAt = new Date().getTime()
        }
    }
} 