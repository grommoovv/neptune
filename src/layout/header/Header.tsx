import { FC } from 'react'
import cls from './Header.module.scss'
import { MdFullscreen, MdOutlineNotifications, MdSearch } from 'react-icons/md'
import { ThemeSwitcher } from '@/shared/components/common/ThemeSwitcher/ThemeSwitcher'

interface HeaderProps {}

const Header: FC = () => {
  return (
    <>
      <header className={cls.header}>
        <div className={cls.content}>
          <div className={cls.utils}>
            <span className={cls.icon}>
              <MdSearch size={24} />
            </span>
            <span className={cls.icon}>
              <MdFullscreen size={24} />
            </span>
            <span className={cls.icon}>
              <MdOutlineNotifications size={24} />
            </span>
            <span className={cls.icon}>
              <ThemeSwitcher />
            </span>
          </div>
          <div className={cls.user}>
            <div className={cls.user_info}>Administrator</div>
            <div className={cls.user_img}></div>
          </div>
        </div>
      </header>
    </>
  )
}

export { Header }
