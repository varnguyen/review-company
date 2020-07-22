import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    { title: 'Trang chủ', icon: 'home-outline', link: '/pages/dashboard', home: true },
    // { title: 'Chia sẻ công việc', icon: 'briefcase-outline', link: '/pages/work-share' },
    // { title: 'Tin tức', icon: 'book-outline', link: '/pages/news' },
    { title: 'Chat', icon: 'message-square-outline', link: '/pages/chat/converstation', pathMatch: 'prefix' },
    {
        title: 'Người dùng',
        icon: 'person-outline',
        expanded: false,
        children: [
            { title: 'Thông tin cá nhân', icon: 'person-outline', link: '/pages/profile' },
            { title: 'Đổi mật khẩu', icon: 'lock-outline', link: '/pages/change-password' },
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
