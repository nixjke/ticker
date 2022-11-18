import { ColorType, createChart } from 'lightweight-charts'
import { useEffect, useRef, FC } from 'react'

type ChartProps = {
  data: any
  colors: {
    backgroundColor: string
    lineColor: string
    textColor: string
    areaTopColor: string
    areaBottomColor: string
  }
}

const chartOptions = {
  layout: { textColor: 'black', background: { type: 'solid', color: 'white' } },
}

export const Chart: FC<ChartProps> = ({
  data,
  colors: {
    backgroundColor = 'white',
    lineColor = '#2962FF',
    textColor = 'black',
    areaTopColor = '#2962FF',
    areaBottomColor = 'rgba(41, 98, 255, 0.28)',
  },
}) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current!.clientWidth })
    }

    const chart = createChart(chartContainerRef.current!, {
      layout: {
        textColor: textColor,
        background: {
          color: backgroundColor,
          bottomColor: areaBottomColor,
          topColor: areaTopColor,
        },
      },

      width: chartContainerRef.current?.clientWidth,
      height: 250,
    })

    chart.timeScale().fitContent()

    chart.priceScale('right').applyOptions({
      visible: false,
    })

    chart.applyOptions({
      timeScale: { visible: false },
      grid: {
        horzLines: { visible: false },
        vertLines: { visible: false },
      },
    })

    const newSeries = chart.addCandlestickSeries({
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderVisible: false,
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
    })
    newSeries.applyOptions({baseLineVisible: false})
    newSeries.setData(data)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)

      chart.remove()
    }
  }, [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor])

  return <div ref={chartContainerRef} />
}
