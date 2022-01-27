import {MigrationInterface, QueryRunner} from "typeorm";

export class Character1643141339774 implements MigrationInterface {
    name = 'Character1643141339774'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "character" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "house" character varying, "slug" character varying, "imageLink" character varying, "gender" character varying, "books" character varying, "rank" integer, "titles" character varying, "pagerank" jsonb DEFAULT '[]', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6c4aec48c564968be15078b8ae5" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "character"`);
    }

}
