import { FC } from 'react'
import cls from './Footer.module.scss'

interface FooterProps {}

const Footer: FC = (props) => {
  return (
    <>
      <footer className={cls.footer}>Footer</footer>
    </>
  )
}

export { Footer }
