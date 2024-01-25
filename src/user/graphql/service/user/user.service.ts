import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entity/User';
import { Like, Repository } from 'typeorm';
import { UserInput } from '../../input/UserInput';

@Injectable()
export class UserService {
 

    constructor(@InjectRepository(User) private userRepository: Repository<User>) {

    }

    async createUser(user: UserInput) {
        const instance = this.userRepository.create({
            ...user
        });

        await this.userRepository.save(instance);
        return instance;
      }

      
    async getUser(id: number) {
        return await this.userRepository.findOne( {relations:['settings'] ,where: {id}, });
      }

    async getUsers(name: string) {
        return await this.userRepository
        .createQueryBuilder('user')
        .where("user.username like '%' || :name || '%'", {name: name })
        .leftJoinAndSelect('user.settings', 'settingsUserId')
        .getMany();
    }


}
