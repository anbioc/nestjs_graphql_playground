import { Field, HideField, Int, ObjectType } from '@nestjs/graphql';
import { UserSetting } from './UserSettings';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'user'})
export class User {

  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Field()
  username: string;

  @Column()
  @Field({
    nullable: true
  })
  displayname?: string;

  @OneToOne(()=> UserSetting)
  @JoinColumn()
  @Field({nullable: true})
  settings?: UserSetting;

}
