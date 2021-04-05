import {MigrationInterface, QueryRunner} from "typeorm";

export class addUniqueEmailInAccountTable1615360899404 implements MigrationInterface {
    name = 'addUniqueEmailInAccountTable1615360899404'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "users"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`COMMENT ON COLUMN "accounts"."email" IS NULL`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD CONSTRAINT "UQ_ee66de6cdc53993296d1ceb8aa0" UNIQUE ("email")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accounts" DROP CONSTRAINT "UQ_ee66de6cdc53993296d1ceb8aa0"`);
        await queryRunner.query(`COMMENT ON COLUMN "accounts"."email" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2021-03-10 14:00:03.225373+07'`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2021-03-10 14:00:03.225373+07'`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."created_at" IS NULL`);
    }

}
