import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'
import '@/shared/styles/globals.scss'
import cls from './layout.module.scss'
import { Footer, Header, Sidebar } from '@/layout'
import { ThemeContextProvider } from '@/context/theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard - Neptune Admin',
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeContextProvider>
      <html lang='en'>
        <body className={inter.className}>
          <div className={cls.layout}>
            <aside className={cls.sidebar}>
              <Sidebar />
            </aside>
            <section className={cls.section}>
              <Header />
              <main className={cls.main}>{children}</main>
              <Footer />
            </section>
          </div>
        </body>
      </html>
    </ThemeContextProvider>
  )
}

export default RootLayout
