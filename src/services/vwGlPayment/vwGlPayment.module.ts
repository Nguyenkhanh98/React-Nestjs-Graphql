import { Module } from '@nestjs/common';
import { vwGlPaymentService } from './vwGlPayment.service';

@Module( {
    exports: [vwGlPaymentService],
} )

export class vwGlPaymentModule { }
