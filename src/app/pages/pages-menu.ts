import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    { title: 'Home', icon: 'home-outline', link: '/pages/dashboard', home: true },
    { title: 'News', icon: 'book-outline', link: '/pages/news' },
    { title: 'Chat', icon: 'message-square-outline', link: '/pages/chat/converstation', pathMatch: 'prefix' },
    {
        title: 'User',
        icon: 'person-outline',
        expanded: false,
        children: [
            { title: 'Profile', icon: 'person-outline', link: '/pages/profile' },
            { title: 'Change Password', icon: 'lock-outline', link: '/pages/change-password' },
            // { title: 'Logout', icon: 'unlock-outline', },
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
