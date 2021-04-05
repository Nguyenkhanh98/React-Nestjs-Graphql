
export interface VwGlPaymentBase {

    lngReservationNmbr: number
    dtmGlPaymentsDate: Date
    dtmGlPaymentsDateLocal: Date
    lngGlPaymentsReceiptNmbr: number
    strGlPaymentsPayer: string
    strGlPaymentMethodIdent: string
    strGlAuthorizationNmbr: string
    lngResPaxGroupIdNmbr: number
    mnyGlPaymentsAmount: number
    mnyGlCurrencyPaymentsAmount: number
    strCurrencyIdent: string
    mnyExchangeRate: number
    strPaymentTakenBy: string
    strAccountNmbr: string
    sngGlPaymentMethodIdNmbr: string
    strGlPaymentsNotes: string
    strGlCardNmbr: string
    lngCreditCardVerifyIdNmbr: number
    strPaymentTakenByLogonName: string
    dtmCreationDate: Date
    strPaymentRefundFlag: string
    lngGlPaymentsIdNmbr: number
    strResLocator: string

}

interface VwGlPaymentReponse {
    items: VwGlPaymentBase[]
    totalPage: number
    currentPage: number
    totalCount: number
    isAllDataLoaded: boolean
    pageSize: number
}