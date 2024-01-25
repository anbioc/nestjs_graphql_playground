import { Module } from '@nestjs/common';
import { UserResolver } from '../../resolver/UserResolver';
import { UserSettingsResolver } from '../../resolver/UserSettingsResolver';
import { UserService } from '../../service/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entity/User';
import { UserSetting } from '../../entity/UserSettings';
import { SettingsService } from '../../service/settings/settings.service';

@Module({
    imports: [TypeOrmModule.forFeature([User, UserSetting])],
      controllers: [],
      providers: [UserResolver,
         UserSettingsResolver,
         UserService,
        SettingsService],
})
export class UserModule {
    
}
