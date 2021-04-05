import {MigrationInterface, QueryRunner} from "typeorm";

export class changeUser1614743925169 implements MigrationInterface {
    name = 'changeUser1614743925169'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "created_at" TIME WITH TIME ZONE NOT NULL`);
    }

}
