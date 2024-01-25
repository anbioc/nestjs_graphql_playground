import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../entity/User';
import { mockUsers } from 'src/__mocks__/mockUser';
import { UserSetting } from '../entity/UserSettings';
import { mockSettings } from 'src/__mocks__/MockUserSettings';
import { UserInput } from '../input/UserInput';
import { UserService } from '../service/user/user.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query((returns) => User, {
    nullable: true,
    name: 'userById',
  })
  async getUserById(@Args('id', { type: () => Int }) id: number) {
    return await this.userService.getUser(id);
  }

  @Query((returns) => [User], {
    nullable: true,
    name: 'users',
  })
  async getUsers(@Args('name', { type: () => String }) name: string) {
    return await this.userService.getUsers(name);
  }

  @Mutation((returns) => User)
  async createUser(@Args('userInput', { type: () => UserInput }) input: UserInput) {
    return await this.userService.createUser(input);
  }
}
