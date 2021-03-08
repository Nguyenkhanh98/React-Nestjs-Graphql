import {MigrationInterface, QueryRunner} from "typeorm";

export class updateRoleToUserAndUsers1614754773939 implements MigrationInterface {
    name = 'updateRoleToUserAndUsers1614754773939'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_to_role" DROP CONSTRAINT "FK_4fe0cc5d2434f7d04fda5cabbc1"`);
        await queryRunner.query(`ALTER TABLE "user_to_role" DROP CONSTRAINT "FK_188d9731545949fd835898b71cf"`);
        await queryRunner.query(`ALTER TABLE "user_to_role" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "user_to_role" DROP COLUMN "roleId"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "uuid" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "user_to_role" ADD CONSTRAINT "FK_cf3d99d0316e0fb041a6a61738d" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_to_role" ADD CONSTRAINT "FK_cbe516445858eb55127cbaa6801" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_to_role" DROP CONSTRAINT "FK_cbe516445858eb55127cbaa6801"`);
        await queryRunner.query(`ALTER TABLE "user_to_role" DROP CONSTRAINT "FK_cf3d99d0316e0fb041a6a61738d"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2021-03-03 11:25:26.545911+07'`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2021-03-03 11:25:26.545911+07'`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "uuid"`);
        await queryRunner.query(`ALTER TABLE "user_to_role" ADD "roleId" integer`);
        await queryRunner.query(`ALTER TABLE "user_to_role" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "user_to_role" ADD CONSTRAINT "FK_188d9731545949fd835898b71cf" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_to_role" ADD CONSTRAINT "FK_4fe0cc5d2434f7d04fda5cabbc1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
