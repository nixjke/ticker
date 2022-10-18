import React from 'react'

import s from './App.module.scss'

import { useDate } from 'helpers/getDate'

import { Header, Layout, SelectTime } from 'components'

function App() {
  const [timeType, setTimeType] = React.useState('15M')

  const time = useDate(new Date())

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value

    if (timeType === value) return

    setTimeType(value)
  }

  return (
    <div style={{ padding: '30px' }}>
      <Layout>
        <Header name="BTC/USDT Price Chart" date={time} className={s.header} />
        <SelectTime value={timeType} onClick={handleClick} />
      </Layout>
    </div>
  )
}

export default App
