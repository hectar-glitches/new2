"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUp, ArrowDown } from "lucide-react"

interface StockData {
  symbol: string
  price: number
  change: number
  changePercent: number
}

export default function StockTicker() {
  const [stocks, setStocks] = useState<StockData[]>([
    { symbol: "NIFTY 50", price: 24568.75, change: 125.45, changePercent: 0.51 },
    { symbol: "SENSEX", price: 80642.15, change: 412.25, changePercent: 0.52 },
    { symbol: "BANKNIFTY", price: 52345.6, change: -78.3, changePercent: -0.15 },
    { symbol: "HDFC BANK", price: 1678.25, change: 12.75, changePercent: 0.76 },
    { symbol: "RELIANCE", price: 2945.8, change: -18.5, changePercent: -0.62 },
    { symbol: "TCS", price: 3856.45, change: 42.3, changePercent: 1.11 },
    { symbol: "INFOSYS", price: 1542.7, change: 15.8, changePercent: 1.03 },
  ])

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStocks((prevStocks) =>
        prevStocks.map((stock) => {
          const randomChange = (Math.random() - 0.5) * 5
          const newPrice = Math.max(stock.price + randomChange, 0.01)
          const change = Number.parseFloat((newPrice - stock.price + stock.change).toFixed(2))
          const changePercent = Number.parseFloat(((change / (stock.price - stock.change)) * 100).toFixed(2))

          return {
            ...stock,
            price: Number.parseFloat(newPrice.toFixed(2)),
            change,
            changePercent,
          }
        }),
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex overflow-x-auto py-2 scrollbar-hide">
          <div className="flex animate-marquee space-x-8 whitespace-nowrap">
            {stocks.map((stock, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-sm font-medium">{stock.symbol}</div>
                <div className="text-base font-bold">{stock.price.toFixed(2)}</div>
                <div className="flex items-center gap-1">
                  {stock.change >= 0 ? (
                    <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100/80">
                      <ArrowUp className="mr-1 h-3 w-3" />
                      {stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100/80">
                      <ArrowDown className="mr-1 h-3 w-3" />
                      {Math.abs(stock.change).toFixed(2)} ({Math.abs(stock.changePercent).toFixed(2)}%)
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
