
import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";


interface UserCreationAttr {
    email: string;
    password: string
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttr> {
    @ApiProperty({ example: '1', description: 'Unique Id' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    declare id: number;

    @ApiProperty({ example: 'user@gmail.com', description: 'Email address' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({ example: 'uIJCODShu89H*', description: 'Password' })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({ example: false, description: 'Banned' })
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @ApiProperty({ example: false, description: 'Banned reason' })
    @Column({ type: DataType.STRING, allowNull: true })
    bannedReason: string

}