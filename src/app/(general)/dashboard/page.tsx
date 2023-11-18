import { DashboardCard } from '@/shared/components/common'
import cls from './page.module.scss'

const Page = () => {
  return (
    <div className={cls.page}>
      <section className={cls.section}>
        <DashboardCard>Welcome, User</DashboardCard>
        <DashboardCard>You are welcome, George</DashboardCard>
        <DashboardCard>You are welcome, George</DashboardCard>
      </section>
      <section className={cls.section}>
        <DashboardCard>You are welcome, George</DashboardCard>
        <DashboardCard>You are welcome, George</DashboardCard>
      </section>
      <section className={cls.section}></section>
    </div>
  )
}

export default Page
