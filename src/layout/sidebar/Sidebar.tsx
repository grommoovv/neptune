import { FC } from 'react'
import cls from './Sidebar.module.scss'
import { MenuList } from '@/shared/components/common/MenuList/MenuList'

interface SidebarProps {}

const Sidebar: FC = (props) => {
  return (
    <>
      <div className={cls.Sidebar}>
        <MenuList />
      </div>
    </>
  )
}

export { Sidebar }
