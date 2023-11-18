'use client'
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ThemeContextType = {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextType>({})

export const useTheme = (): [Theme, () => void] => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const t = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme?.(t)
    localStorage.setItem('theme', t)
  }

  return [theme || Theme.LIGHT, toggleTheme]
}

// const defaultTheme = (localStorage!.getItem('theme') as Theme) || 'light'

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK)

  const value = useMemo(() => ({ theme, setTheme }), [theme])

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
