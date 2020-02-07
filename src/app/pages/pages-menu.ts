import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    { title: 'Trang chủ', icon: 'home-outline', link: '/pages/dashboard', home: true },
    { title: 'Chat', icon: 'message-square-outline', link: '/pages/chat/converstation', pathMatch: 'prefix' },
    {
        title: 'User',
        icon: 'person-outline',
        expanded: true,
        children: [
            { title: 'Profile', icon: 'person-outline', link: '/pages/profile' },
            { title: 'Change Password', icon: 'lock-outline', link: '/pages/change-password' },
            { title: 'Logout', icon: 'unlock-outline', },
        ],
    },
    // { title: 'FEATURES', group: true },
    // {
    //     title: 'Layout',
    //     icon: 'layout-outline',
    //     children: [
    //         { title: 'Stepper', link: '/pages/layout/stepper' },
    //         { title: 'List', link: '/pages/layout/list' },
    //     ],
    // },
];
