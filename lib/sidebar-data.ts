import {
    LayoutDashboard,
    ClipboardCheck,
    MessageCircleMore,
    LogOut,
//     IconBrowserCheck,
//     IconBug,
//     IconChecklist,
//     IconError404,
//     IconHelp,
//     IconLayoutDashboard,
//     IconLock,
//     IconLockAccess,
//     IconMessages,
//     IconNotification,
//     IconPackages,
//     IconPalette,
//     IconServerOff,
//     IconSettings,
//     IconTool,
//     IconUserCog,
//     IconUserOff,
//     IconUsers,
  } from 'lucide-react'

  import { AudioWaveform, Command, GalleryVerticalEnd } from 'lucide-react'
//   import { type SidebarData } from '../types'
  
  export const sidebarData = {
    user: {
      name: 'satnaing',
      email: 'satnaingdev@gmail.com',
      avatar: '/avatars/shadcn.jpg',
    },
    teams: [
      {
        name: 'PROCOM',
        logo: Command,
        position: 'President',
      },
      {
        name: 'The Literary Club',
        logo: GalleryVerticalEnd,
        position: 'Marketing Head',
      },
      {
        name: 'Character Buuliding Society',
        logo: AudioWaveform,
        position: 'Promotions Head',
      },
    ],
    navGroups: [
      {
        title: 'General',
        items: [
          {
            title: 'Dashboard',
            url: '/',
            icon: LayoutDashboard,
          },
          {
            title: 'Tasks',
            url: '/tasks',
            icon: ClipboardCheck,
          },
          {
            title: 'Chats',
            url: '/chats',
            badge: '3',
            icon: MessageCircleMore,
          },

        ],
      },
      
    //   {
    //     title: 'Other',
    //     items: [
    //       {
    //         title: 'Settings',
    //         icon: IconSettings,
    //         items: [
    //           {
    //             title: 'Profile',
    //             url: '/settings',
    //             icon: IconUserCog,
    //           },
    //           {
    //             title: 'Account',
    //             url: '/settings/account',
    //             icon: IconTool,
    //           },
    //           {
    //             title: 'Appearance',
    //             url: '/settings/appearance',
    //             icon: IconPalette,
    //           },
    //           {
    //             title: 'Notifications',
    //             url: '/settings/notifications',
    //             icon: IconNotification,
    //           },
    //           {
    //             title: 'Display',
    //             url: '/settings/display',
    //             icon: IconBrowserCheck,
    //           },
    //         ],
    //       },
        //   {
        //     title: 'Help Center',
        //     url: '/help-center',
        //     icon: IconHelp,
        //   },
        // ],
    //   },
    ],
  }
  