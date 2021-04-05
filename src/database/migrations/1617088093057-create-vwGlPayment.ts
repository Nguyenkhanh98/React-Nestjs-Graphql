import {MigrationInterface, QueryRunner} from "typeorm";

export class createVwGlPayment1617088093057 implements MigrationInterface {
    name = 'createVwGlPayment1617088093057'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vw_gl_payments" ("id" SERIAL NOT NULL, "reservation_number" character varying NOT NULL, "reservation_locator" character varying NOT NULL, "payment_taken_by" character varying NOT NULL, "payments_amount" character varying NOT NULL, "gl_payment_date" character varying NOT NULL, "gl_payments_receipt_nmbr" character varying NOT NULL, "gl_payment_method_ident" character varying NOT NULL, "adjustment_method" character varying NOT NULL, "description" character varying, "updated_at" TIME WITH TIME ZONE NOT NULL, CONSTRAINT "PK_23f7c6b91a632692e4ab756ba0c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2021-03-30 09:12:45.433632+07'`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2021-03-30 09:12:45.433632+07'`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."created_at" IS NULL`);
        await queryRunner.query(`DROP TABLE "vw_gl_payments"`);
    }

}
