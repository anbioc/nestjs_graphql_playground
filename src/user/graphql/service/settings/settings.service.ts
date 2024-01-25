import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserSetting } from '../../entity/UserSettings';
import { Repository } from 'typeorm';
import { settingsInput } from '../../input/SettingsInput';
import { User } from '../../entity/User';

@Injectable()
export class SettingsService {
    constructor(@InjectRepository(UserSetting) private repository: Repository<UserSetting>,
    @InjectRepository(User) private userRepository: Repository<User>) {

    }

    async createUserSettings(input: settingsInput) {

        const user = await this.userRepository.findOneBy({id: input.userId});

        if (!user) {
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
        }

        const settingsInstance = this.repository.create({
            ...input
        });

        user.settings = settingsInstance;
        this.userRepository.save(user);

        await this.repository.save(settingsInstance);
        return settingsInstance;
    }
}
