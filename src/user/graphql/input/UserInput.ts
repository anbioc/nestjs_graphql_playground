import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UserInput {
    @Field()
    username: string;

    @Field({nullable: true})
    displayname: string;

    
}