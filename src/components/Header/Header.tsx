import React from 'react'

import cn from 'classnames'
import s from './Header.module.scss'

import { useWindowDimensions } from 'helpers/useWindowDimensions'

import { useDate } from 'helpers/usdDate'

interface HeaderProps {
  name: string
  className?: string
}

export const Header: React.FC<HeaderProps> = React.memo(({ name, className }) => {
  const { width } = useWindowDimensions()
  const date = useDate(new Date())

  const formatMonth = (month?: string) => {
    if (width < 500) return month?.substring(0, 3)
    return month
  }

  return (
    <div className={cn(s.header, className)}>
      <div className={s.name}>{name}</div>
      <div className={s.time}>
        <div>{date?.day}</div> <div className={s.month}>{formatMonth(date?.month)}</div>
        <div>{date?.time}</div>
      </div>
    </div>
  )
})
