
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateUserInput {
    firstName: string;
    lastName: string;
    gender: string;
}

export class UpdateUserInput {
    firstName: string;
    lastName: string;
    gender: string;
}

export class Account {
    id?: string;
    email?: string;
    token?: string;
    name?: string;
}

export abstract class IQuery {
    abstract accounts(offset?: number, limit?: number): Account[] | Promise<Account[]>;

    abstract account(id?: string): Account | Promise<Account>;

    abstract users(offset?: number, limit?: number): User[] | Promise<User[]>;

    abstract user(id?: string): User | Promise<User>;
}

export class User {
    id?: string;
    uuid?: string;
    accounts?: Account[];
    firstName?: string;
    lastName?: string;
    avatar?: string;
    gender?: string;
    isVerified?: boolean;
    isOnline?: boolean;
    isLock?: boolean;
    reason?: string;
    isActive?: boolean;
    createdAt?: number;
    updatedAt?: number;
}

export abstract class IMutation {
    abstract createUser(input?: CreateUserInput): User | Promise<User>;
}

export type JSON = any;
export type JSONObject = any;
