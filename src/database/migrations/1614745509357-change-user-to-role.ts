import {MigrationInterface, QueryRunner} from "typeorm";

export class changeUserToRole1614745509357 implements MigrationInterface {
    name = 'changeUserToRole1614745509357'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "users"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2021-03-03 11:09:55.530025+07'`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2021-03-03 11:09:55.530025+07'`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."created_at" IS NULL`);
    }

}
