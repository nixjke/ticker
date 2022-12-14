import React from 'react'

export type Dates = { day: number; month: string; time: string }

const getPadTime = (time: number) => time.toString().padStart(2, '0')

export const useDate = (date: Date) => {
  const [time, setTime] = React.useState<Dates>()

  const dates = {
    day: date.getDate(),
    month: date.toLocaleString('default', { month: 'long' }),
    time: `${getPadTime(date.getHours())}:${getPadTime(date.getMinutes())}`,
  }

  React.useEffect(() => {
    setTime(dates)
  }, [])

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(dates)
    }, 1000)
    return () => clearInterval(interval)
  }, [date])

  return time
}
