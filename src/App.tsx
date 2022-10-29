import React from 'react'

import s from './App.module.scss'

import 'chart.js/auto'
import { Bar } from 'react-chartjs-2'

import { Header, Layout, SelectTime } from 'components'
import { useDate } from 'helpers/getDate'

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
        <Bar data={{ labels: ['Red', 'Blue','2'], datasets: [{ data: [12, 19, 12, 123, 123, 51] }] }} />
        <SelectTime value={timeType} onClick={handleClick} />
      </Layout>
    </div>
  )
}

export default App
