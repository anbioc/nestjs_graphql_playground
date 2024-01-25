import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: 'usersettings'})
@ObjectType()
export class UserSetting {

    @PrimaryColumn()
    @Field((type) => Int)
    userId: number;

    @Column()
    @Field({defaultValue: false})
    receiveNotif: boolean;

    @Column()
    @Field({defaultValue: false})
    email: boolean;
}