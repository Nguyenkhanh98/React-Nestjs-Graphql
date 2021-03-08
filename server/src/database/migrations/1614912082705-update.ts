import {MigrationInterface, QueryRunner} from "typeorm";

export class update1614912082705 implements MigrationInterface {
    name = 'update1614912082705'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_a5711ddc02238171575201a0806"`);
        await queryRunner.query(`CREATE TABLE "accounts" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "token" character varying, "name" character varying NOT NULL, "provider" integer NOT NULL, "user_id" integer, CONSTRAINT "PK_5a7a02c20412299d198e097a8fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "REL_a5711ddc02238171575201a080"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "microsoft_id"`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD CONSTRAINT "FK_3000dad1da61b29953f07476324" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accounts" DROP CONSTRAINT "FK_3000dad1da61b29953f07476324"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2021-03-05 09:21:17.306681+07'`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2021-03-05 09:21:17.306681+07'`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "microsoft_id" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "REL_a5711ddc02238171575201a080" UNIQUE ("microsoft_id")`);
        await queryRunner.query(`DROP TABLE "accounts"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_a5711ddc02238171575201a0806" FOREIGN KEY ("microsoft_id") REFERENCES "microsofts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
