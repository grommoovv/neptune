'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import cls from './MenuLink.module.scss'

interface MenuLinkProps {
  item: {
    title: string
    path: string
    icon: JSX.Element
  }
}

const MenuLink: FC<MenuLinkProps> = ({ item }) => {
  const pathname = usePathname()

  return (
    <Link className={`${cls.link} ${pathname === item.path && cls.active}`} href={item.path}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export { MenuLink }
