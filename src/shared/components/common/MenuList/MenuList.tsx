import { FC } from 'react'
import { menuItems } from '@/shared/constants'
import { MenuLink } from '../MenuLink/MenuLink'
import cls from './MenuList.module.scss'

const MenuList: FC = () => {
  return (
    <ul className={cls.list}>
      {menuItems.map((category) => (
        <li key={category.title}>
          <span className={cls.category}>{category.title}</span>
          {category.list.map((item) => (
            <MenuLink item={item} key={item.title} />
          ))}
        </li>
      ))}
    </ul>
  )
}

export { MenuList }
