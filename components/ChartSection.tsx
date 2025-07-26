"use client"

import { CartesianGrid, XAxis, YAxis, Tooltip, Area, AreaChart, ResponsiveContainer } from "recharts"

// Sample data for the chart
const data = [
  { name: 'Jan', value: 1500 },
  { name: 'Feb', value: 1800 },
  { name: 'Mar', value: 1600 },
  { name: 'Apr', value: 2100 },
  { name: 'May', value: 1900 },
  { name: 'Jun', value: 2400 },
]

export default function ChartSection() {
  return (
    <div className="h-[200px] sm:h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00bcff" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#00bcff" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="stroke-border opacity-80" />
          <XAxis 
            dataKey="name" 
            className="text-xs text-muted-foreground"
            tick={{ fontSize: 10 }}
          />
          <YAxis 
            className="text-xs text-muted-foreground"
            tick={{ fontSize: 10 }}
            width={40}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "hsl(var(--background))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "6px",
              padding: "8px"
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
            formatter={(value: number) => [
              new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }).format(value),
              'Value'
            ]}
          />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="#00bcff" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorValue)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}