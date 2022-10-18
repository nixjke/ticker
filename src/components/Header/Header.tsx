import React from 'react'

import cn from 'classnames'
import s from './Header.module.scss'

import { useWindowDimensions } from 'helpers/useWindowDimensions'

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
  const { width } = useWindowDimensions()

  const { day, month, time } = date
  
  const formatMonth = (month: string) => {
    if (width < 500) return month.substring(0, 3)
    return month
  }

  return (
    <div className={cn(s.header, className)}>
      <div className={s.name}>{name}</div>
      <div className={s.time}>
        <div>{day}</div> <div className={s.month}>{formatMonth(month)}</div> <div>{time}</div>
      </div>
    </div>
  )
}
