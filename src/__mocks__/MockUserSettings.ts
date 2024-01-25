import { UserSetting } from "src/user/graphql/entity/UserSettings";

export const mockSettings: UserSetting[] = [{
    userId: 1,
    receiveNotif: false,
    email: true,
}, 
{
    userId: 2,
    receiveNotif: true,
    email: false,
}, 
{
    userId: 3,
    receiveNotif: false,
    email: false,
}, 
{
    userId: 4,
    receiveNotif: false,
    email: true,
}, 
// {
//     userId: 5,
//     receiveNotif: true,
//     email: false,
// }
// , {
//     userId: 6,
//     receiveNotif: true,
//     email: false,
// },{
//     userId: 7,
//     receiveNotif: true,
//     email: true,
// },
]