import {MigrationInterface, QueryRunner} from "typeorm";

export class users1649774505982 implements MigrationInterface {
    name = 'users1649774505982'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "cpf" character varying NOT NULL, "birthDate" TIMESTAMP NOT NULL, "phoneNumber" character varying NOT NULL, "nickName" character varying NOT NULL, "gender" character varying NOT NULL, "postalCode" character varying NOT NULL, "street" character varying NOT NULL, "number" integer NOT NULL, "complement" character varying NOT NULL, "neighborhood" character varying, "city" character varying NOT NULL, "state" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
