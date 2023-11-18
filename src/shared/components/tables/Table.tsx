import { FC } from 'react'
import cls from './Table.module.scss'

interface TableProps {}

const array = ['1', '2', '3', '4']

const Table: FC = (props) => {
  return (
    <>
      <div className={cls.table}>
        <div className={cls.side}>
          <button className={cls.action}>Create user</button>
        </div>
        <div className={cls.body}>
          <div className={cls.search}>
            <span>Search user</span>
          </div>

          <div className={cls.list}>
            {array.map((a) => (
              <div className={cls.item} key={a}>
                <div className={cls.title}>Title</div>
                <div className={cls.tags}>Tags</div>
                <div className={cls.actions}>Actions</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export { Table }
