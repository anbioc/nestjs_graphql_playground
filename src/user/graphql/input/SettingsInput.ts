import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class settingsInput {
    @Field((type) => Int)
    userId: number;

    @Field({nullable: true, defaultValue: false})
    email: boolean;

    @Field({nullable: true, defaultValue: false})
    receiveNotif: boolean;
}