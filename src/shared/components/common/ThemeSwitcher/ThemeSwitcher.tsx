'use client'
import { Theme, useTheme } from '@/context/theme'
import { FC } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

const ThemeSwitcher: FC = (props) => {
  const [theme, toggle] = useTheme()

  return (
    <div style={{ width: 24, height: 24 }} onClick={toggle}>
      {theme === Theme.DARK ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
    </div>
  )
}

export { ThemeSwitcher }
