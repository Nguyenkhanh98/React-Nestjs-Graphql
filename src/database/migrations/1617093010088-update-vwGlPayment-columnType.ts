import {MigrationInterface, QueryRunner} from "typeorm";

export class updateVwGlPaymentColumnType1617093010088 implements MigrationInterface {
    name = 'updateVwGlPaymentColumnType1617093010088'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "users"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "vw_gl_payments" DROP COLUMN "reservation_number"`);
        await queryRunner.query(`ALTER TABLE "vw_gl_payments" ADD "reservation_number" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vw_gl_payments" DROP COLUMN "payments_amount"`);
        await queryRunner.query(`ALTER TABLE "vw_gl_payments" ADD "payments_amount" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vw_gl_payments" DROP COLUMN "gl_payment_date"`);
        await queryRunner.query(`ALTER TABLE "vw_gl_payments" ADD "gl_payment_date" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vw_gl_payments" DROP COLUMN "gl_payments_receipt_nmbr"`);
        await queryRunner.query(`ALTER TABLE "vw_gl_payments" ADD "gl_payments_receipt_nmbr" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vw_gl_payments" DROP COLUMN "gl_payments_receipt_nmbr"`);
        await queryRunner.query(`ALTER TABLE "vw_gl_payments" ADD "gl_payments_receipt_nmbr" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vw_gl_payments" DROP COLUMN "gl_payment_date"`);
        await queryRunner.query(`ALTER TABLE "vw_gl_payments" ADD "gl_payment_date" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vw_gl_payments" DROP COLUMN "payments_amount"`);
        await queryRunner.query(`ALTER TABLE "vw_gl_payments" ADD "payments_amount" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vw_gl_payments" DROP COLUMN "reservation_number"`);
        await queryRunner.query(`ALTER TABLE "vw_gl_payments" ADD "reservation_number" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2021-03-30 15:16:36.936847+07'`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2021-03-30 15:16:36.936847+07'`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."created_at" IS NULL`);
    }

}
