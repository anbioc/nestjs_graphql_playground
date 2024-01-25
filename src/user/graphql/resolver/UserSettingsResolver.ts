import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSetting } from '../entity/UserSettings';
import { settingsInput as SettingsInput } from '../input/SettingsInput';
import { SettingsService } from '../service/settings/settings.service';

@Resolver((of) => UserSetting)
export class UserSettingsResolver {

  constructor(private settingsService: SettingsService) {}

  @Mutation((returns) => UserSetting)
  async createUserSetting(
    @Args('settingType', { type: () => SettingsInput }) input: SettingsInput,
  ) {
    
    return await this.settingsService.createUserSettings(input);
  }
}
