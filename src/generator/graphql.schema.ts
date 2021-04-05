
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class AmeliaReportUserRequest {
    pageNumber?: number;
    pageSize?: number;
    userName?: string;
}

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

export class VwGlPaymentRequest {
    pageNumber?: number;
    pageSize?: number;
    pnr?: number;
    strPaymentTakenBy: string;
    startDate: Date;
    endDate?: Date;
    groupBy?: string;
}

export class UpdateVwGlPayment {
    reservationNumber?: number;
    reservationLocator?: string;
    paymentTakenBy?: string;
    glPaymentsAmount?: number;
    glPaymentDate?: Date;
    glPaymentsReceiptNmbr?: number;
    glPaymentMethodIdent?: string;
    adjustmentMethod?: string;
    description?: string;
}

export class VwGlPaymentBaseRequest {
    pageNumber?: number;
    pageSize?: number;
    pnr?: number;
    strPaymentTakenBy: string;
    startDate: Date;
    endDate?: Date;
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

    abstract amelia_report_users(queryInput?: AmeliaReportUserRequest): AmeliaReportUser[] | Promise<AmeliaReportUser[]>;

    abstract users(offset?: number, limit?: number): User[] | Promise<User[]>;

    abstract user(id?: string): User | Promise<User>;

    abstract me(): User | Promise<User>;

    abstract vwGlPayments(query: VwGlPaymentRequest): VwGlPayment[] | Promise<VwGlPayment[]>;

    abstract vwGlPayment_base(query: VwGlPaymentBaseRequest): VwGlPaymentBase[] | Promise<VwGlPaymentBase[]>;
}

export class AmeliaReportUser {
    lngUserIdNmbr?: number;
    strUserLogonName?: string;
    strUserName?: string;
    lngUserBaseIdNmbr?: number;
    strUserEmployeeFlag?: string;
    strUserStatusFlag?: string;
    strUserLoggedInFlag?: string;
    strDeletedFlag?: string;
    strUserBarcode?: string;
    strUserPhone?: string;
    strUserEmail?: string;
    strUserCity?: string;
    lngProvinceIdNmbr?: number;
    strUserPostalCode?: string;
    lngCountryIdNmbr?: number;
    strUserNotes?: string;
    lngResAgencyIdNmbr?: number;
    strNtloginName?: string;
    strResZuluLocalSwitch?: string;
    lngResClosestAirportTimezone?: number;
    tspTimestamp?: Date;
    strDeletableFlag?: string;
    dtmCreationDate?: Date;
    lngCreationUserIdNmbr?: number;
    dtmLastModDate?: Date;
    lngLastModUserIdNmbr?: number;
    dtmPasswordLastModDate?: Date;
    lngConsecutiveFailedLogins?: number;
    lngAirlineCodesIdNmbr?: number;
}

export class LoginResponse {
    accessToken?: string;
    expiresIn?: number;
}

export abstract class IMutation {
    abstract oauthAAD(accessToken?: string): LoginResponse | Promise<LoginResponse>;

    abstract createUser(input?: CreateUserInput): User | Promise<User>;

    abstract updateVwGlPayment(data: UpdateVwGlPayment): boolean | Promise<boolean>;
}

export class User {
    uuid?: string;
    account?: Account;
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

export class VwGlPayment {
    reservationNumber?: number;
    reservationLocator?: string;
    paymentTakenBy?: string;
    glPaymentsAmount?: number;
    glPaymentDate?: Date;
    glPaymentsReceiptNmbr?: number;
    glPaymentMethodIdent?: string;
    adjustmentMethod?: string;
    description?: string;
    updatedAt?: string;
}

export class VwGlPaymentBase {
    lngReservationNmbr?: number;
    dtmGlPaymentsDate?: Date;
    dtmGlPaymentsDateLocal?: Date;
    lngGlPaymentsReceiptNmbr?: number;
    strGlPaymentsPayer?: string;
    strGlPaymentMethodIdent?: string;
    strGlAuthorizationNmbr?: string;
    lngResPaxGroupIdNmbr?: number;
    mnyGlPaymentsAmount?: number;
    mnyGlCurrencyPaymentsAmount?: number;
    strCurrencyIdent?: string;
    mnyExchangeRate?: number;
    strPaymentTakenBy?: string;
    strAccountNmbr?: string;
    lngGlPaymentMethodIdNmbr?: string;
    strGlPaymentsNotes?: string;
    strGlCardNmbr?: string;
    lngCreditCardVerifyIdNmbr?: number;
    strPaymentTakenByLogonName?: string;
    dtmCreationDate?: Date;
    strPaymentRefundFlag?: string;
    lngGlPaymentsIdNmbr?: number;
    strResLocator?: string;
}

export type JSON = any;
export type JSONObject = any;
