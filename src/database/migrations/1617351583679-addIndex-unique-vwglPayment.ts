import {MigrationInterface, QueryRunner} from "typeorm";

export class addIndexUniqueVwglPayment1617351583679 implements MigrationInterface {
    name = 'addIndexUniqueVwglPayment1617351583679'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE INDEX "IDX_5b391edb2a5551e85d0fccf38b" ON "vw_gl_payments" ("payment_taken_by") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_29ccb492ec54d5b7d517c76ada" ON "vw_gl_payments" ("gl_payments_receipt_nmbr") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_29ccb492ec54d5b7d517c76ada"`);
        await queryRunner.query(`DROP INDEX "IDX_5b391edb2a5551e85d0fccf38b"`);
    }

}
