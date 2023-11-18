import {
  MdDashboard,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
} from 'react-icons/md'

export const menuItems = [
  {
    title: 'General',
    list: [
      {
        title: 'Dashboard',
        path: '/',
        icon: <MdDashboard />,
      },

      {
        title: 'Analytics',
        path: '/analytics',
        icon: <MdAnalytics />,
      },
    ],
  },
  {
    title: 'Management',
    list: [
      {
        title: 'Transactions',
        path: '/transactions',
        icon: <MdAttachMoney />,
      },
      {
        title: 'Users',
        path: '/users',
        icon: <MdPeople />,
      },
      {
        title: 'Products',
        path: '/products',
        icon: <MdShoppingBag />,
      },
      {
        title: 'Employees',
        path: '/employees',
        icon: <MdWork />,
      },
    ],
  },
]
