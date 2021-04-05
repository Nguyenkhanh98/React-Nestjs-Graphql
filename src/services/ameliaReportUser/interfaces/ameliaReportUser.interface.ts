
export interface AmeliaReportUser {
    lngUserIdNmbr: number
    strUserLogonName: string
    strUserName: string
    lngUserBaseIdNmbr: number
    strUserEmployeeFlag: string
    strUserStatusFlag: string
    strUserLoggedInFlag: string
    strDeletedFlag: string
    strUserBarcode: string
    strUserPhone: string
    strUserEmail: string
    strUserCity: string
    lngProvinceIdNmbr: number
    strUserPostalCode: string
    lngCountryIdNmbr: number
    strUserNotes: string
    lngResAgencyIdNmbr: number
    strNtloginName: string
    strResZuluLocalSwitch: string
    lngResClosestAirportTimezone: number
    tspTimestamp: Date
    strDeletableFlag: string
    dtmCreationDate: Date
    lngCreationUserIdNmbr: number
    dtmLastModDate: Date
    lngLastModUserIdNmbr: number
    dtmPasswordLastModDate: Date
    lngConsecutiveFailedLogins: number
    lngAirlineCodesIdNmbr: number
}
