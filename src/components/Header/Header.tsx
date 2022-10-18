import React from 'react'

import cn from 'classnames'
import s from './Header.module.scss'
import { Dates } from 'helpers/getDate'

interface HeaderProps {
  name: string
  date?: Dates
  className?: string
}

export const Header: React.FC<HeaderProps> = ({
  name,
  date = { day: 1, month: 'January', time: '00:00' },
  className,
}) => {
  const { day, month, time } = date

  return (
    <div className={cn(s.header, className)}>
      <div className={s.name}>{name}</div>
      <div className={s.time}>
        <span>{day}</span> <span>{month}</span> <span>{time}</span>
      </div>
    </div>
  )
}
