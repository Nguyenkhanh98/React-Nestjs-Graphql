import {MigrationInterface, QueryRunner} from "typeorm";

export class changeUser1614744580226 implements MigrationInterface {
    name = 'changeUser1614744580226'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "microsofts" ALTER COLUMN "token" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "microsofts"."token" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "first_name" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."first_name" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "last_name" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."last_name" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "avatar" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."avatar" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "reset_password_token" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."reset_password_token" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "reset_password_expires" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."reset_password_expires" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "gender" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."gender" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."is_verified" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "is_verified" SET DEFAULT false`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."is_online" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "is_online" SET DEFAULT false`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."is_lock" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "is_lock" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "reason" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."reason" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."is_active" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "is_active" SET DEFAULT false`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "display_name" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "roles"."display_name" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "roles"."display_name" IS NULL`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "display_name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "is_active" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."is_active" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."reason" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "reason" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "is_lock" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."is_lock" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "is_online" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."is_online" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "is_verified" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."is_verified" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."gender" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "gender" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."reset_password_expires" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "reset_password_expires" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."reset_password_token" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "reset_password_token" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."avatar" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "avatar" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."last_name" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "last_name" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."first_name" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "first_name" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "microsofts"."token" IS NULL`);
        await queryRunner.query(`ALTER TABLE "microsofts" ALTER COLUMN "token" SET NOT NULL`);
    }

}
