import { FC, ReactNode } from 'react'
import cls from './DashboardCard.module.scss'

interface DashboardCardProps {
  children: ReactNode
}

const DashboardCard: FC<DashboardCardProps> = (props) => {
  const { children } = props

  return (
    <>
      <div className={cls.card}>{children}</div>
    </>
  )
}

export { DashboardCard }
