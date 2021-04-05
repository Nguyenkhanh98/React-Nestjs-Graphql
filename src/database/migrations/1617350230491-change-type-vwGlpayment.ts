import {MigrationInterface, QueryRunner} from "typeorm";

export class changeTypeVwGlpayment1617350230491 implements MigrationInterface {
    name = 'changeTypeVwGlpayment1617350230491'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vw_gl_payments" DROP COLUMN "gl_payments_amount"`);
        await queryRunner.query(`ALTER TABLE "vw_gl_payments" ADD "gl_payments_amount" real NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vw_gl_payments" DROP COLUMN "gl_payments_amount"`);
        await queryRunner.query(`ALTER TABLE "vw_gl_payments" ADD "gl_payments_amount" integer NOT NULL`);
    }

}
