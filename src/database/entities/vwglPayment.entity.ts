import { Expose, plainToClass } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, Index, Timestamp, OneToMany, JoinColumn } from 'typeorm';

@Entity( {
    'name': 'vw_gl_payments',
} )

export class VwGlPayment {
    @Expose()
    @PrimaryGeneratedColumn( 'increment' )
    id: number

    @Expose()
    @Column( { name: 'reservation_number' } )
    reservationNumber: number

    @Expose()
    @Column( { name: 'reservation_locator' } )
    reservationLocator: string

    @Expose()
    @Index()
    @Column( { name: 'payment_taken_by' } )
    paymentTakenBy: string

    @Expose()
    @Column( { name: 'gl_payments_amount', type: 'real' } )
    glPaymentsAmount: string

    @Expose()
    @Column( { name: 'gl_payment_date' } )
    glPaymentDate: Date

    @Expose()
    @Index( { unique: true } )
    @Column( { name: 'gl_payments_receipt_nmbr' } )
    glPaymentsReceiptNmbr: number

    @Expose()
    @Column( { name: 'gl_payment_method_ident' } )
    glPaymentMethodIdent: string

    @Expose()
    @Column( { name: 'adjustment_method' } )
    adjustmentMethod: string

    @Expose()
    @Column( { name: 'description', nullable: true } )
    description: string

    @Expose()
    @Column( 'timestamp with time zone', { name: 'updated_at' } )
    updatedAt: Date
    constructor( vwGlPayment: Partial<VwGlPayment> ) {
        if ( vwGlPayment ) {
            Object.assign(
                this,
                plainToClass( VwGlPayment, vwGlPayment, {
                    excludeExtraneousValues: true,
                } )
            );
            this.description = this.description || '';
            this.updatedAt = new Date()
        }
    }
}