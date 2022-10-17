import React from 'react'

import s from './Header.module.scss'

interface HeaderProps {
  name: string
  date: string
}

export const Header: React.FC<HeaderProps> = ({ name, date }) => {
  return (
    <div className={s.header}>
      <div className={s.name}>{name}</div>
      <div className={s.time}>{date}</div>
    </div>
  )
}
