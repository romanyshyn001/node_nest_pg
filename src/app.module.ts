import { Module } from "@nestjs/common";

import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/user.model";
import { RolesModule } from './roles/roles.module';
import { Roles } from "./roles/role.model";
import { UserRoles } from "./roles/user-roles.model";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Roles, UserRoles],
            autoLoadModels: true,
            synchronize: true,
        }),
        UsersModule,
        RolesModule,
    ],
})
export class AppModule { }