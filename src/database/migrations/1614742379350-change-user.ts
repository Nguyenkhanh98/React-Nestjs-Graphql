import { MigrationInterface, QueryRunner } from "typeorm";

export class changeUser1614742379350 implements MigrationInterface {
    name = 'changeUser1614742379350'

    public async up( queryRunner: QueryRunner ): Promise<void> {
        await queryRunner.query( `ALTER TABLE "users" ADD "avatar" character varying NOT NULL` );
    }

    public async down( queryRunner: QueryRunner ): Promise<void> {
        await queryRunner.query( `ALTER TABLE "users" DROP COLUMN "avatar"` );
    }

}
