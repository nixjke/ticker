import React from 'react'

import cn from 'classnames'
import s from './SelectTime.module.scss'

interface SelectTimeProps {
  value: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const allTime = ['15M', '1H', '4H', '1D', '1W']

export const SelectTime: React.FC<SelectTimeProps> = ({ value, onClick }) => {
  return (
    <div className={s.selectTime}>
      <div>Time</div>
      <div className={s.timeGroup}>
        {allTime.map((el, i) => (
          <button
            key={i}
            value={el}
            className={cn(s.time, { [s.timeSelected]: value === el })}
            onClick={onClick}
          >
            {el}
          </button>
        ))}
      </div>
    </div>
  )
}
