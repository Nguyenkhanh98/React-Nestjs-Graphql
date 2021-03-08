import {MigrationInterface, QueryRunner} from "typeorm";

export class migrateFromEntities1614675109001 implements MigrationInterface {
    name = 'migrateFromEntities1614675109001'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "microsofts" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "token" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_d8dd5710b23e48540e2b3cc9082" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "reset_password_token" character varying NOT NULL, "reset_password_expires" integer NOT NULL, "gender" character varying NOT NULL, "is_verified" boolean NOT NULL, "is_online" boolean NOT NULL, "is_lock" boolean NOT NULL, "reason" character varying NOT NULL, "is_active" boolean NOT NULL, "created_at" TIME WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "microsoft_id" integer, CONSTRAINT "REL_a5711ddc02238171575201a080" UNIQUE ("microsoft_id"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_to_role" ("id" SERIAL NOT NULL, "role_id" integer NOT NULL, "user_id" integer NOT NULL, "userId" integer, "roleId" integer, CONSTRAINT "PK_b5768a03507a08811d335d9e496" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "display_name" character varying NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_a5711ddc02238171575201a0806" FOREIGN KEY ("microsoft_id") REFERENCES "microsofts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_to_role" ADD CONSTRAINT "FK_4fe0cc5d2434f7d04fda5cabbc1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_to_role" ADD CONSTRAINT "FK_188d9731545949fd835898b71cf" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_to_role" DROP CONSTRAINT "FK_188d9731545949fd835898b71cf"`);
        await queryRunner.query(`ALTER TABLE "user_to_role" DROP CONSTRAINT "FK_4fe0cc5d2434f7d04fda5cabbc1"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_a5711ddc02238171575201a0806"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TABLE "user_to_role"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "microsofts"`);
    }

}
