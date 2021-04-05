import {MigrationInterface, QueryRunner} from "typeorm";

export class updateVwGlPaymentColumnPaymentName1617094598406 implements MigrationInterface {
    name = 'updateVwGlPaymentColumnPaymentName1617094598406'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vw_gl_payments" RENAME COLUMN "payments_amount" TO "gl_payments_amount"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vw_gl_payments" RENAME COLUMN "gl_payments_amount" TO "payments_amount"`);
    }

}
